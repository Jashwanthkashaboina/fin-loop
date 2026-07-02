import { useEffect, useState } from "react";
import api from "../api/axios";


function Summary() {
    const [summary, setSummary] = useState({
        totalInvestment: 0,
        currentValue: 0,
        pnl: 0,
        pnlPercent: 0,
    });

    useEffect(() => {
        api.get("/summary")
            .then((res) => {
                setSummary(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return ( 
        <>
            <div className="username">
                <h6>Hi, User!</h6>
                <hr className="divider" />
            </div>

            <div className="section">
                <span> <p>Equity</p> </span>

                <div className="data">
                <div className="first">
                    <h3>3.74k</h3>
                    <p>Margin available</p>
                </div>
                <hr />

                <div className="second">
                    <p> Margins used <span>0</span>{" "} </p>
                    <p> Opening balance <span>3.74k</span>{" "} </p>
                </div>
                </div>
                <hr className="divider" />
            </div>

            <div className="section">
                <span> <p>Holdings (13)</p> </span>

                <div className="data">
                    <div className="first">
                        <h3 className={summary.pnl >= 0 ? "profit" : "loss"}>
                            {summary.pnl.toFixed(2)}
                            <small>
                                {summary.pnlPercent.toFixed(2)}%
                            </small>
                        </h3>

                        <p>P&amp;L</p>
                    </div>

                    <hr />

                    <div className="second">
                        <p>
                            Current Value
                            <span>{summary.currentValue.toFixed(2)}</span>
                        </p>

                        <p>
                            Investment
                            <span>{summary.totalInvestment.toFixed(2)}</span>
                        </p>
                    </div>
                </div>

                <hr className="divider" />
            </div>
        </>
    );
}

export default Summary;