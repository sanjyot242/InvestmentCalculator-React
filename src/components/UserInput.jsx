export default function UserInput({ userInput, onChangeVal }) {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label>Initial Investment</label>
          <input
            type='number'
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangeVal('initialInvestment', event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type='number'
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChangeVal('annualInvestment', event.target.value)
            }
            required
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label>Expected Return</label>
          <input
            type='number'
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChangeVal('expectedReturn', event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type='number'
            value={userInput.duration}
            onChange={(event) => onChangeVal('duration', event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
