import React from 'react';

function Menu({ closeMenu }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center z-50 overflow-hidden">
           

            <div className="bg-gray-200 w-full h-full lg:w-1/2 lg:h-auto pt-10">

                
                <ul className="mt-4 mx-16 text-xl">
                    <li className="mb-8 cursor-pointer">
                        <div className='flex justify-between'>
                        <div className='flex items-center'>
                        <svg viewBox="0 0 115 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-enterprise-black h-6 flex-none">
                                <path d="m32.626.367-8.802 21.589a3.284 3.284 0 0 1-3.041 2.043h-8.895a3.283 3.283 0 0 1-3.04-2.04L.02.367A.266.266 0 0 1 .266 0h8.91c.222 0 .421.138.5.346l6.672 17.795L22.967.348a.533.533 0 0 1 .5-.348h8.912c.189 0 .318.192.247.367Zm.813-.1v23.466c0 .147.12.267.267.267h24.463c.146 0 .266-.12.266-.267v-5.851a.267.267 0 0 0-.266-.267h-15.92a.267.267 0 0 1-.266-.267v-1.927c0-.146.12-.266.267-.266h15.557c.147 0 .267-.12.267-.267V9.082a.267.267 0 0 0-.267-.267H42.25a.267.267 0 0 1-.267-.267V6.652c0-.147.12-.267.267-.267h15.919c.146 0 .266-.12.266-.267V.267A.267.267 0 0 0 58.17 0H33.706a.267.267 0 0 0-.267.267Zm26.12 0v23.466c0 .147.12.267.268.267H84.29c.146 0 .266-.12.266-.267v-5.851a.268.268 0 0 0-.266-.267H68.37a.267.267 0 0 1-.266-.267v-1.927c0-.146.12-.266.267-.266h15.557c.147 0 .267-.12.267-.267V9.082a.267.267 0 0 0-.267-.267H68.37a.267.267 0 0 1-.267-.267V6.652c0-.147.12-.267.267-.267H84.29c.146 0 .266-.12.266-.267V.267A.268.268 0 0 0 84.29 0H59.826a.267.267 0 0 0-.266.267Zm26.123 23.466c0 .147.12.267.266.267h16.76c3.668 0 6.627-.951 8.891-2.868 2.264-1.902 3.396-4.95 3.396-9.147s-1.132-7.245-3.396-9.148C109.335.95 106.377 0 102.708 0h-16.76a.267.267 0 0 0-.266.267v23.466Zm8.81-6.163a.267.267 0 0 1-.267-.267V6.697c0-.147.12-.267.266-.267h6.255c1.932 0 3.366.423 4.302 1.268.936.845 1.403 2.279 1.403 4.287s-.467 3.472-1.403 4.317c-.936.846-2.37 1.268-4.302 1.268h-6.255Z" fill="currentColor"></path>
                                </svg>
                                </div>
                                <button onClick={closeMenu} className="text-black text-xl font-sm">X</button>
                            </div>
                    </li>
                    <li className="mb-8 cursor-pointer">
                        <div className='flex justify-between'>
                            <p>Products</p>
                            <p>&gt;</p>
                        </div>
                    </li>
                    <li className="mb-8 cursor-pointer">
                        <div className='flex justify-between'>
                            <p>Use Cases</p>
                            <p>&gt;</p>
                        </div>
                    </li>
                    <li className="mb-8 cursor-pointer">
                        <div className='flex justify-between'>
                            <p>Resources</p>
                            <p>&gt;</p>
                        </div>
                    </li>
                    <li className="mb-8 cursor-pointer">
                        <div className='flex justify-between'>
                            <p>For Business</p>
                            <p>&gt;</p>
                        </div>
                    </li>
                    <li className="mb-8 cursor-pointer">
                        <div className='flex justify-between'>
                            <p>Pricing</p>
                            <p>&gt;</p>
                        </div>
                    </li>
                    <li className="mb-8 cursor-pointer">
                        <div className='flex justify-between'>
                            <p>Book a Demo</p>
                            <p>&gt;</p>
                        </div>
                    </li>
                </ul>

                <div className='flex justify-center '>
                    <div className='w-[80%]'>
                        <button className='mb-3 w-full cursor-pointer bg-white text-black px-5 py-3 rounded-full font-semibold'>Login</button>
                        <button className='w-full bg-black text-white px-5 py-3 rounded-full font-semibold'>Signup</button>
                    </div>
                </div>


            </div>
    </div>
  );
}

export default Menu;
