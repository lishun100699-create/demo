import React from 'react';
import { Link } from 'react-router-dom';

export default function Activity() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-red-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-red-600 font-bold text-2xl">周黑鸭 × 奶龙</div>
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-gray-600 hover:text-red-600 transition-colors">互动主页</Link>
            <Link to="/products" className="text-gray-600 hover:text-red-600 transition-colors">产品展示</Link>
            <Link to="/activity" className="text-red-600 font-bold">活动规则</Link>
          </div>
        </div>
      </nav>

      {/* 活动内容区 */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-red-600">联动活动规则</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20milk%20dragon%20cartoon%20character%20with%20Zhou%20Hei%20Ya%20product%2C%20happy%20expression%2C%20colorful%20background%2C%20high%20quality%20illustration&image_size=square_hd" 
                alt="奶龙活动" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4 text-red-600">活动主题</h2>
              <p className="text-gray-600 mb-6 text-lg">周黑鸭 × 奶龙 「美味联动，快乐打滚」主题活动</p>
              
              <h3 className="text-xl font-bold mb-3 text-red-600">活动时间</h3>
              <p className="text-gray-600 mb-6">2026年4月18日 - 2026年5月18日</p>
              
              <h3 className="text-xl font-bold mb-3 text-red-600">参与方式</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• 在互动主页完成「奶龙护食」游戏</li>
                <li>• 购买任意联动产品</li>
                <li>• 分享活动页面到社交媒体</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 活动奖励 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-red-600 text-center">活动奖励</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">一等奖</div>
              <p className="text-gray-600 mb-4">奶龙限定公仔 + 周黑鸭全年免费券</p>
              <div className="text-sm text-gray-500">共10份</div>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">二等奖</div>
              <p className="text-gray-600 mb-4">奶龙联名礼盒 + 50元优惠券</p>
              <div className="text-sm text-gray-500">共50份</div>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">三等奖</div>
              <p className="text-gray-600 mb-4">奶龙钥匙扣 + 20元优惠券</p>
              <div className="text-sm text-gray-500">共200份</div>
            </div>
          </div>
        </div>

        {/* 活动规则详情 */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-red-600">活动规则详情</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>1. 参与者需在活动期间完成互动游戏，游戏分数越高，中奖概率越大。</p>
            <p>2. 购买联动产品的用户可获得额外抽奖机会，每购买一件产品增加一次抽奖机会。</p>
            <p>3. 分享活动页面到社交媒体并截图，可获得额外抽奖机会。</p>
            <p>4. 中奖结果将在活动结束后3个工作日内公布，中奖用户将收到短信通知。</p>
            <p>5. 奖品将在中奖通知后7个工作日内寄出。</p>
            <p>6. 本活动最终解释权归周黑鸭所有。</p>
          </div>

          {/* 分享按钮 */}
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              分享到微信
            </button>
            <button className="bg-blue-400 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              分享到微博
            </button>
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-red-600 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-xl font-bold mb-4">周黑鸭 × 奶龙 联动系列</div>
          <div className="text-sm">© 2026 周黑鸭. 保留所有权利.</div>
        </div>
      </footer>
    </div>
  );
}