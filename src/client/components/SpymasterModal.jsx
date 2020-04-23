import React from 'react';

const SpymasterModal = ({
  startGame, handleClose, show, children,
}) => {
  const classes = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={classes}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={startGame}>Start Game!</button>
        <button type="button" onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default SpymasterModal;
