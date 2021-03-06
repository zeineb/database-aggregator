import React from 'react';
import classNames from 'classnames';
import StatusSvg from './svg/StatusSvg';

export default function TaskCard(props) {
  const { enabled, state, onClick, children } = props;
  let status, statusMessage;
  if (state) {
    status = state.status;
    statusMessage = state.reason;
  }
  const opacity = classNames({ 'opacity-25': !enabled });
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-md m-auto px-6 py-4 mb-6 relative cursor-pointer"
      onClick={onClick}
    >
      <div className={opacity}>
        <div className="absolute pin-r pr-6">
          <StatusSvg status={status} message={statusMessage} />
        </div>
        {children}
      </div>
    </div>
  );
}
