import React from 'react'
import Marquee from "react-fast-marquee";

function TrustedBy() {
  return (
    <div className='pb-10'>
        <h1 className="py-10 text-center font-semibold text-4xl">Trusted by teams at</h1>

        <Marquee direction='left' speed='60' className='max-w-screen px-10'>
            <img className='w-200 h-20' src='https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/netflix_53cebd27b1/netflix_53cebd27b1.png' />
            <img className='w-200 h-20' src='https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/google_09644c00ae/google_09644c00ae.png' />
            <img className='w-200 h-20' src='https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/target_652c903f65/target_652c903f65.png'/>
            <img className='w-200 h-20' src='https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/meta_5d91e3dc70/meta_5d91e3dc70.png'/>
            <img className='w-200 h-20' src='https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/p_and_g_1_2f9d9b5986/p_and_g_1_2f9d9b5986.png' />
            <img className='w-200 h-20' src='https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/amazon_6eb4586569/amazon_6eb4586569.png' />
            <img className='w-200 h-20' src='https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/merck_a56f190e3e/merck_a56f190e3e.png' />
            <img className='w-200 h-20' src='https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/ubs_6bebab925b/ubs_6bebab925b.png' />
            <img className='w-200 h-20' src='https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/bbc_222468ab60/bbc_222468ab60.png' />
            <img className='w-200 h-20' src='https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/nbcuniversal_020f502b6a/nbcuniversal_020f502b6a.png' />
        </Marquee>
    </div>
  )
}

export default TrustedBy