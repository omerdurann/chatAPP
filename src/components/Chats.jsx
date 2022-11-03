import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src="https://i.pinimg.com/474x/e8/7b/2c/e87b2c4e603f6af5060c5badebfedd92.jpg" alt="" />
        <div className="userChatInfo">
          <span>Sinan Hocam</span>
          <p>Nasılsın!!</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://static.birgun.net/resim/haber-detay-resim/2020/09/21/besiktas-tan-ahmet-cakar-a-dava-783390-5.jpg" alt="" />
        <div className="userChatInfo">
          <span>Ahmet Çakar</span>
          <p>Merhaba!!</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://www.gercekgundem.com/images/posts/202101/266760_480x270.jpg" alt="" />
        <div className="userChatInfo">
          <span>ROK</span>
          <p>AAAAAAA!!</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://i4.hurimg.com/i/hurriyet/75/866x494/5e8b11dc2269a216e08f443a.jpg" alt="" />
        <div className="userChatInfo">
          <span>Abdülkerim Durmaz</span>
          <p>Görüşürüz!!</p>
        </div>
      </div>
    </div>
  )
}

export default Chats
