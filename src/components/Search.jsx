import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Kullanıcı Ara'/>
      </div>
      <div className="userChat">
        <img src="https://i.pinimg.com/474x/e8/7b/2c/e87b2c4e603f6af5060c5badebfedd92.jpg" alt="" />
        <div className="userChatInfo">
          <span>Sinan Hocam</span>
          <p>Nasılsın!!</p>
        </div>
      </div>
    </div>
  )
}

export default Search
