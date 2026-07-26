import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 88 },
        { name: "Shubman Gill", score: 67 },
        { name: "KL Rahul", score: 75 },
        { name: "Hardik Pandya", score: 62 },
        { name: "Ravindra Jadeja", score: 81 },
        { name: "R Ashwin", score: 58 },
        { name: "Mohammed Shami", score: 72 },
        { name: "Jasprit Bumrah", score: 65 },
        { name: "Kuldeep Yadav", score: 78 },
        { name: "Mohammed Siraj", score: 55 }
    ];

    return (

        <div>

            <h2>List of Players</h2>

            <table border="1" cellPadding="10">

                <thead>

                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        players.map((player, index) => (

                            <tr key={index}>
                                <td>{player.name}</td>
                                <td>{player.score}</td>
                            </tr>

                        ))
                    }

                </tbody>

            </table>

            <h2>Players with Score Below 70</h2>

            <ul>

                {
                    players
                        .filter(player => player.score < 70)
                        .map((player, index) => (

                            <li key={index}>
                                {player.name} - {player.score}
                            </li>

                        ))
                }

            </ul>

        </div>

    );

}

export default ListofPlayers;