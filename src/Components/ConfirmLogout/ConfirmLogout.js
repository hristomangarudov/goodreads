import './ConfirmLogout.scss'
export default function ConfirmLogout() {
  return (
    <div className="background">
      <div className="text-wrapper">
        <div>
          <p>Confirm logout</p>
          <p>Are you sure you want to logout?</p>
          <div>
            <button>Cancel</button>
            <button>Yes, I'm sure</button>
          </div>
        </div>
      </div>
    </div>
  );
}
