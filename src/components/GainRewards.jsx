import React from 'react';
import './GainRewards.css';

const GainRewards = () => {
    return (
        <div className="rewards-container">
            <h1 className="rewards-header">Gain Rewards</h1>
            <p className="rewards-description">
                Welcome to the Gain Rewards page! Here, you can earn various rewards based on your activities.
            </p>
            <div className="reward-card">
                <h2 className="card-title">Reward #1</h2>
                <p className="card-details">Complete 5 courses to earn a special badge!</p>
                <button className="reward-button">Claim Reward</button>
            </div>
            <div className="reward-card">
                <h2 className="card-title">Reward #2</h2>
                <p className="card-details">Refer a friend and earn bonus points!</p>
                <button className="reward-button">Claim Reward</button>
            </div>
        </div>
    );
};

export default GainRewards;
