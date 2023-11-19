import React from 'react';

export const SuccessWindow = ({ username }) => {
  return (
    <div className="success-window">
      <h2>Успешный вход!</h2>
      <style jsx>{`
        .success-window {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f9f9f9;
        }

        h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        p {
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

const ErrorDisplay = ({ error }) => {
  return (
    <div className="error-display">
      <p className="error-message">{error}</p>
      <style jsx>{`
        .error-display {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .error-message {
          font-size: 24px;
          color: #ff0000;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default ErrorDisplay;