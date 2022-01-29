import React, { useState } from 'react';

function SummaryPage() {
    const [checked, setChecked] = useState(false);
  return (
    <div>
        <form>
            <input type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            id="confirm-checkbox"        
            />
            {/* connected through htmlFor */}
            <label htmlFor='confirm-checkbox'>Are you sure to purchase?</label>
            <br />
            <button disabled={!checked} type='submit'>Purchase</button>
        </form>
    </div>);
}

export default SummaryPage;
