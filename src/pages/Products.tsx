import React from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
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
            <Link to="/products" className="text-red-600 font-bold">产品展示</Link>
            <Link to="/activity" className="text-gray-600 hover:text-red-600 transition-colors">活动规则</Link>
          </div>
        </div>
      </nav>

      {/* 产品展示区 */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-red-600">联动产品展示</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 产品1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <div className="h-64 bg-yellow-100 flex items-center justify-center">
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhou%20Hei%20Ya%20duck%20neck%20product%20with%20cute%20milk%20dragon%20cartoon%20character%20design%2C%20red%20and%20yellow%20packaging%2C%20high%20quality%20product%20photography&image_size=square_hd" 
                alt="奶龙联名鸭脖" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-red-600">奶龙联名鸭脖</h3>
              <p className="text-gray-600 mb-4">精选优质鸭脖，搭配独家配方，口感麻辣鲜香，与奶龙可爱形象完美结合。</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-red-600">¥39.9</span>
                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors">
                  立即购买
                </button>
              </div>
            </div>
          </div>

          {/* 产品2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <div className="h-64 bg-yellow-100 flex items-center justify-center">
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhou%20Hei%20Ya%20chicken%20wings%20product%20with%20cute%20milk%20dragon%20cartoon%20character%20design%2C%20red%20and%20yellow%20packaging%2C%20high%20quality%20product%20photography&image_size=square_hd" 
                alt="奶龙联名鸡翅" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-red-600">奶龙联名鸡翅</h3>
              <p className="text-gray-600 mb-4">秘制鸡翅，外酥里嫩，香辣可口，包装上印有奶龙的可爱形象，送礼自用两相宜。</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-red-600">¥29.9</span>
                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors">
                  立即购买
                </button>
              </div>
            </div>
          </div>

          {/* 产品3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <div className="h-64 bg-yellow-100 flex items-center justify-center">
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhou%20Hei%20Ya%20gift%20box%20with%20cute%20milk%20dragon%20cartoon%20character%20design%2C%20red%20and%20yellow%20packaging%2C%20high%20quality%20product%20photography&image_size=square_hd" 
                alt="奶龙联名礼盒" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-red-600">奶龙联名礼盒</h3>
              <p className="text-gray-600 mb-4">豪华礼盒装，内含鸭脖、鸡翅、鸭掌等多种产品，奶龙定制包装，是送礼的绝佳选择。</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-red-600">¥89.9</span>
                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors">
                  立即购买
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 购买须知 */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-red-600">购买须知</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• 联名产品限量发售，先到先得</li>
            <li>• 产品保质期为7天，请及时食用</li>
            <li>• 购买满99元即可享受包邮服务</li>
            <li>• 扫描包装上的二维码可参与互动活动</li>
          </ul>
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