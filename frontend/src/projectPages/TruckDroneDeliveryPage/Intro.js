

export const Intro = () => {
    return (
        <div className='truckDroneIntro'>
            <h1>Truck Drone Delivery System</h1>
            <p> This is the solution to a problem of needing to deliver packages to randomly generated customers using trucks and drones.
                The solution involved using advanced Operations Research techniques, in particular <strong>Benders' Decomposition</strong>, the process of splitting the problem into a master problem and sub problem.
                The problem is an extension on the paper <i>A logic-based Benders decomposition method for the multi-trip traveling repairman problem with drones</i> by <i>M.E. Bruni, S.Khodaparasti and M.Moshref-Javadi</i>.
                In my solution, the limitation of stopping the trucks while the drones are being launched is lifted, allowing the truck to move and deliver a package in the time it takes a drone to deliver its package,
                allowing the model more freedom to simulate real life applications and achieving more efficient times. 
            </p>
        </div>
    )
}