import React from 'react'

function Cards() {
  return (
    <div className='pd-4 flex justify-center flex-wrap gap-6'>
        {/* 1 */}
        <div className='bg py-6 bg-white px-10 rounded-2xl shadow-md w-80'>
            <h1 className='font-lg text-2xl'>Basic</h1>
            <div className='text-md text-gray-500 pb-3'>Ideal starter plan</div>
            <div className='flex items-center gap-6'>
                <h1 className='' style={{'fontSize':'30px','fontWeight':'500'}}>₹290.67</h1>
                <span className='text-sm text-[#006000] bg-[#D0FF99] px-2 rounded-full py-1'>SAVE 36%</span>
            </div>
            <div className='text-sm text-gray-500 pb-3'>Per user / month, billed yearly</div>
            <button className='mt-6 mb-9 py-4 font-medium text-center border-2 border-indigo-500 w-[100%] rounded-full'>Go Basic</button>

            <hr/>
            <ul className='pt-4'>
                <li className='text-sm text-gray-500 pb-2'>✓ Remove watermark</li>
                <li className='text-sm text-gray-500 pb-2'>✓ Subtitles 12 hr/yr</li>
                <li className='text-sm text-gray-500 pb-2'>✓ No Upload Size Limit</li>
                <li className='text-sm text-gray-500 pb-2'>✓ Full HD 1080p Exports</li>
                <li className='text-sm text-white pb-2'>x</li>
                <li className='text-sm text-white pb-2'>x</li>
            </ul>
        </div>


        {/* 2 */}
        <div className='bg py-6  bg-white px-10 rounded-2xl shadow-md border-4 w-80 border-indigo-500'>
            <span style={{'fontSize':'12px'}} className='-mt-7 gap-1 flex text-white py-1.5 px-2 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 rounded-tl rounded-tr rounded-lg float-end'>
                
                <div>
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF" class="sc-bgqQPU gHVkBW"><path d="M10.5 5.25C10.5 5.44891 10.421 5.63968 10.2803 5.78033C10.1397 5.92098 9.94891 6 9.75 6C8.75544 6 7.80161 6.39509 7.09835 7.09835C6.39509 7.80161 6 8.75544 6 9.75C6 9.94891 5.92098 10.1397 5.78033 10.2803C5.63968 10.421 5.44891 10.5 5.25 10.5C5.05109 10.5 4.86032 10.421 4.71967 10.2803C4.57902 10.1397 4.5 9.94891 4.5 9.75C4.5 8.75544 4.10491 7.80161 3.40165 7.09835C2.69839 6.39509 1.74456 6 0.75 6C0.551088 6 0.360322 5.92098 0.21967 5.78033C0.0790178 5.63968 0 5.44891 0 5.25C0 5.05109 0.0790178 4.86032 0.21967 4.71967C0.360322 4.57902 0.551088 4.5 0.75 4.5C1.74456 4.5 2.69839 4.10491 3.40165 3.40165C4.10491 2.69839 4.5 1.74456 4.5 0.75C4.5 0.551088 4.57902 0.360322 4.71967 0.21967C4.86032 0.0790178 5.05109 0 5.25 0C5.44891 0 5.63968 0.0790178 5.78033 0.21967C5.92098 0.360322 6 0.551088 6 0.75C6 1.74456 6.39509 2.69839 7.09835 3.40165C7.80161 4.10491 8.75544 4.5 9.75 4.5C9.94891 4.5 10.1397 4.57902 10.2803 4.71967C10.421 4.86032 10.5 5.05109 10.5 5.25Z" fill="currentColor"></path><path d="M11.25 15C11.25 15.1989 11.171 15.3897 11.0303 15.5303C10.8897 15.671 10.6989 15.75 10.5 15.75C10.1022 15.75 9.72064 15.908 9.43934 16.1893C9.15804 16.4706 9 16.8522 9 17.25C9 17.4489 8.92098 17.6397 8.78033 17.7803C8.63968 17.921 8.44891 18 8.25 18C8.05109 18 7.86032 17.921 7.71967 17.7803C7.57902 17.6397 7.5 17.4489 7.5 17.25C7.5 16.8522 7.34196 16.4706 7.06066 16.1893C6.77936 15.908 6.39782 15.75 6 15.75C5.80109 15.75 5.61032 15.671 5.46967 15.5303C5.32902 15.3897 5.25 15.1989 5.25 15C5.25 14.8011 5.32902 14.6103 5.46967 14.4697C5.61032 14.329 5.80109 14.25 6 14.25C6.39782 14.25 6.77936 14.092 7.06066 13.8107C7.34196 13.5294 7.5 13.1478 7.5 12.75C7.5 12.5511 7.57902 12.3603 7.71967 12.2197C7.86032 12.079 8.05109 12 8.25 12C8.44891 12 8.63968 12.079 8.78033 12.2197C8.92098 12.3603 9 12.5511 9 12.75C9 13.1478 9.15804 13.5294 9.43934 13.8107C9.72064 14.092 10.1022 14.25 10.5 14.25C10.6989 14.25 10.8897 14.329 11.0303 14.4697C11.171 14.6103 11.25 14.8011 11.25 15Z" fill="currentColor"></path><path d="M18 9.75C18 9.94891 17.921 10.1397 17.7803 10.2803C17.6397 10.421 17.4489 10.5 17.25 10.5C16.4544 10.5 15.6913 10.8161 15.1287 11.3787C14.5661 11.9413 14.25 12.7044 14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25C13.3011 14.25 13.1103 14.171 12.9697 14.0303C12.829 13.8897 12.75 13.6989 12.75 13.5C12.75 12.7044 12.4339 11.9413 11.8713 11.3787C11.3087 10.8161 10.5456 10.5 9.75 10.5C9.55109 10.5 9.36032 10.421 9.21967 10.2803C9.07902 10.1397 9 9.94891 9 9.75C9 9.55109 9.07902 9.36032 9.21967 9.21967C9.36032 9.07902 9.55109 9 9.75 9C10.5456 9 11.3087 8.68393 11.8713 8.12132C12.4339 7.55871 12.75 6.79565 12.75 6C12.75 5.80109 12.829 5.61032 12.9697 5.46967C13.1103 5.32902 13.3011 5.25 13.5 5.25C13.6989 5.25 13.8897 5.32902 14.0303 5.46967C14.171 5.61032 14.25 5.80109 14.25 6C14.25 6.79565 14.5661 7.55871 15.1287 8.12132C15.6913 8.68393 16.4544 9 17.25 9C17.4489 9 17.6397 9.07902 17.7803 9.21967C17.921 9.36032 18 9.55109 18 9.75Z" fill="currentColor"></path></svg>
                </div>
                
                <p>RECOMMENDED</p></span>
            <h1 className='font-lg text-2xl'>Pro</h1>
            <div className='text-md text-gray-500 pb-3'>For pro video creation</div>
            <div className='flex items-center gap-6'>
                <h1 className='text-4xl '>₹599</h1>
                <span className='text-sm text-[#006000] bg-[#D0FF99] px-2 rounded-full py-1'>SAVE 21%</span>
            </div>
            <div className='text-sm text-gray-500 pb-3'>Per user / month, billed yearly</div>
            <button className='mt-6 mb-8 font-medium text-white py-4 text-center border-2 w-[100%] rounded-full bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-300'>Go Pro</button>

            <hr/>
            <ul className='pt-4'>
                <li className='text-sm text-gray-500 pb-2'>✓ Subtitles 24 hr/y</li>
                <li className='text-sm text-gray-500 pb-2'>✓ Clean Audio</li>
                <li className='text-sm text-gray-500 pb-2'>✓ Eye Contact Correction</li>
                <li className='text-sm text-gray-500 pb-2'>✓ Stock Audio & Video Library</li>
                <li className='text-sm text-gray-500 pb-2'>✓ Download Subtitles</li>
                <li className='text-sm text-white pb-2'>x</li>
            </ul>
        </div>


        {/* 3 */}
        <div className='bg py-6 bg-white px-10 rounded-2xl shadow-md w-80'>
            <h1 className='font-lg text-2xl'>Business</h1>
            <div className='text-md text-gray-500 pb-3'>For up to 5 people</div>
            <div className='flex items-center gap-6'>
                <h1 className='text-4xl '>₹1500</h1>
                <span className='text-sm text-[#006000] bg-[#D0FF99] px-2 rounded-full py-1'>SAVE 14%</span>
            </div>
            <div className='text-sm text-gray-500 pb-3'>Per user / month, billed yearly</div>
            <button className='mt-6 mb-2 py-4 font-medium  text-center border-2 border-indigo-500 w-[100%] rounded-full'>Go Business</button>
            <div className='text-gray-500 text-sm text-center pb-2'>or <a className='underline'>Request a Trial</a></div>
            <hr/>
            <ul className='pt-4'>
                <li className='text-sm text-gray-500 pb-2'>✓ AI Avatars 4 hr/yr</li>
                <li className='text-sm text-gray-500 pb-2'>✓ Subtitles 134 hr/yr</li>
                <li className='text-sm text-gray-500 pb-2'>✓ Translate to 50+ Languages</li>
                <li className='text-sm text-gray-500 pb-2'>✓ Text to Speech 60 hr/yr</li>
                <li className='text-sm text-gray-500 pb-2'>✓ Customizable Video Templates</li>
                <li className='text-sm text-gray-500 pb-2'>✓ 4k Export Quality</li>
            </ul>
        </div>


         {/* 4 */}
         <div className='bg py-6 bg-white px-10 rounded-2xl shadow-md w-80'>
            <h1 className='font-lg text-2xl'>Enterprise</h1>
            <div className='text-md text-gray-500 pb-3'>Scale video across your team</div>
            <div className='flex items-center gap-6'>
                <h1 className='text-4xl '>Let's Talk</h1>
                {/* <span className='text-sm text-[#006000] bg-[#D0FF99] px-2 rounded-full py-1'>SAVE 14%</span> */}
            </div>
            <div className='text-sm text-gray-500 pb-3'>Custom Pricing</div>
            <button className='mt-6 mb-2 py-4 font-medium text-center border-2 border-indigo-500 w-[100%] rounded-full'>Book a Demo</button>
            <div className='text-gray-500 text-sm text-center pb-2'>or <a className='underline'>Request a Trial</a></div>
            <hr/>
            <ul className='pt-4'>
                <li className='text-sm text-gray-500 pb-2'>✓ Personalized AI avatars</li>
                <li className='text-sm text-gray-500 pb-2'>✓ Brand assets & templates</li>
                <li className='text-sm text-gray-500 pb-2'>✓ Multiple workspaces</li>
                <li className='text-sm text-gray-500 pb-2'>✓ Custom usage limits</li>
                <li className='text-sm text-gray-500 pb-2'>✓ Creator training</li>
                <li className='text-sm text-gray-500 pb-2'>✓ 4k Account manager</li>
            </ul>
        </div>

    </div>
  )
}

export default Cards