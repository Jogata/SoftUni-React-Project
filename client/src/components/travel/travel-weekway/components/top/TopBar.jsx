import "./topbar.css";

export function TopBar() {
    return (
        <div className="top-bar">
            <div className="logo">
                <i className="ri-leaf-line"></i>
                <span>WEEKAWAY</span>
            </div>
            <div className="info">
                {/* <div className='hidden md:flex items-center px-6'> */}
                {/* <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]' /> */}
                <p className='text-sm text-gray-700'>
                    <i className="ri-time-line"></i> 9AM - 5AM
                </p>
                {/* </div> */}
                {/* <div className='hidden md:flex items-center px-6'> */}
                {/* <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]' /> */}
                <p className='text-sm text-gray-700'>
                    <i className="fa fa-phone"></i> 1-888-817-1234
                </p>
                {/* </div> */}
                <button>Get a Free Quote</button>
            </div>
        </div>
    );
};