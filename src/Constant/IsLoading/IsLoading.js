import React from 'react';
import {TailSpin} from 'react-loader-spinner';

import './IsLoading.css';

const IsLoading = () => {
  return (
    <div className = 'app__isLoading'>
      <TailSpin color="#00BFFF" height={200} width={200} />
    </div>
  )
}

export default IsLoading