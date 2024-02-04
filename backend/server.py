# Backend to website

from flask import Flask, jsonify, request
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.route('/move', methods=['POST'])
def get_move():
    data = request.json
    fen = data['fen']
    print(f"Fen data: {fen}")

    engine_path = "../../../Chess/ChessEngine"

    process = subprocess.Popen([engine_path], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

    # Send commands
    print("Sending position")
    process.stdin.write(f"position fen {fen}\n")
    print("Sent\nSending go command")
    process.stdin.write("go depth 10\n")
    print("Sent")
    process.stdin.flush()

    # Read engine's best move from stdout
    print("Lines found from engine output")
    while True:
        line = process.stdout.readline().strip()
        print(line)
        if "bestmove" in line:
            print(line)
            best_move = line.split(" ")[1]
            # Setm 
            break 

    process.terminate()

    if len(best_move) == 5:
        return jsonify({"sourceSquare": best_move[:2],
                        "targetSquare": best_move[2:4],
                        "promotion": best_move[-1],
                        "best_move": best_move})
    else:
        return jsonify({"sourceSquare": best_move[:2],
                        "targetSquare": best_move[2:4],
                        "promotion": "",
                        "best_move": best_move})


if __name__ == "__main__":
    app.run(debug=True, port=8080)