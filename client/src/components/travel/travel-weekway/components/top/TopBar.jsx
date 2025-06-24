import "./topbar.css";

export function TopBar() {
    return (
        <div className="top-bar">
            <div className="logo">
                <i className="ri-leaf-line"></i>
                <span>WEEKAWAY</span>
            </div>
            <div className="info">
                <p className='text-sm text-gray-700'>
                    <i className="ri-time-line"></i> 9AM - 5AM
                </p>
                <p className='text-sm text-gray-700'>
                    <i className="fa fa-phone"></i> 1-888-817-1234
                </p>
                <button>Get a Free Quote</button>
            </div>
        </div>
    );
};