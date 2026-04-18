import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-draggable';
import { Howl } from 'howler';
import { motion, useAnimation } from 'framer-motion';

export default function Home() {
  const [distance, setDistance] = useState(100);
  const [isDragging, setIsDragging] = useState(false);
  const [isDropped, setIsDropped] = useState(false);
  const垃圾桶Ref = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  // 奶龙声音
  const milkDragonSound = useRef<Howl | null>(null);
  
  useEffect(() => {
    // 初始化声音
    milkDragonSound.current = new Howl({
      src: ['https://assets.mixkit.co/sfx/preview/mixkit-cartoon-whistle-1110.mp3'],
      volume: 0.3,
      loop: false
    });
    
    return () => {
      milkDragonSound.current?.unload();
    };
  }, []);
  
  // 计算距离并更新奶龙反应
  useEffect(() => {
    if (isDragging && 垃圾桶Ref.current && productRef.current) {
      const 垃圾桶Rect = 垃圾桶Ref.current.getBoundingClientRect();
      const productRect = productRef.current.getBoundingClientRect();
      
      const 垃圾桶CenterX = 垃圾桶Rect.left + 垃圾桶Rect.width / 2;
      const productCenterX = productRect.left + productRect.width / 2;
      
      const newDistance = Math.max(0, 垃圾桶CenterX - productCenterX);
      setDistance(newDistance);
      
      // 根据距离调整声音和动画
      const volume = Math.min(1, 1 - newDistance / 300);
      const frequency = Math.max(0.1, newDistance / 300);
      
      // 调整声音
      if (milkDragonSound.current) {
        milkDragonSound.current.volume(volume);
        if (!milkDragonSound.current.playing()) {
          milkDragonSound.current.play();
        }
      }
      
      // 调整动画
      controls.start({
        rotate: [0, -10, 10, 0],
        transition: {
          duration: frequency,
          repeat: Infinity,
          ease: "easeInOut"
        }
      });
    }
  }, [isDragging, controls]);
  
  // 拖动开始
  const handleStart = () => {
    setIsDragging(true);
    setIsDropped(false);
  };
  
  // 拖动结束
  const handleStop = () => {
    setIsDragging(false);
    // 检查是否拖入垃圾桶
    if (distance < 50) {
      setIsDropped(true);
      // 播放成功声音
      if (milkDragonSound.current) {
        milkDragonSound.current.stop();
        milkDragonSound.current.play();
      }
    }
  };
  
  // 重置游戏
  const handleReset = () => {
    setIsDropped(false);
    setDistance(100);
    if (milkDragonSound.current) {
      milkDragonSound.current.stop();
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-red-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-red-600 font-bold text-2xl">周黑鸭 × 奶龙</div>
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-red-600 font-bold">互动主页</Link>
            <Link to="/products" className="text-gray-600 hover:text-red-600 transition-colors">产品展示</Link>
            <Link to="/activity" className="text-gray-600 hover:text-red-600 transition-colors">活动规则</Link>
          </div>
        </div>
      </nav>

      {/* 互动区域 */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-red-600">奶龙护食大挑战</h1>
        <p className="text-center text-gray-600 mb-12">拖动周黑鸭产品，看奶龙的反应！</p>
        
        <div className="relative bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* 奶龙区域 */}
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
              <motion.div
                animate={controls}
                className="relative"
              >
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20milk%20dragon%20cartoon%20character%2C%20yellow%20color%2C%20big%20eyes%2C%20happy%20expression%2C%20high%20quality%20illustration&image_size=square_hd" 
                  alt="奶龙" 
                  className="w-64 h-64 object-contain"
                />
                {!isDropped && (
                  <Draggable
                    onStart={handleStart}
                    onStop={handleStop}
                    bounds="parent"
                  >
                    <div 
                      ref={productRef}
                      className="absolute -bottom-10 -right-10 cursor-move"
                    >
                      <img 
                        src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhou%20Hei%20Ya%20duck%20neck%20product%2C%20red%20packaging%2C%20high%20quality%20product%20photography&image_size=square_hd" 
                        alt="周黑鸭产品" 
                        className="w-32 h-32 object-contain"
                      />
                    </div>
                  </Draggable>
                )}
              </motion.div>
            </div>
            
            {/* 垃圾桶区域 */}
            <div className="md:w-1/2 flex justify-center">
              <div 
                ref={垃圾桶Ref}
                className="relative"
              >
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=colorful%20trash%20can%2C%20cartoon%20style%2C%20high%20quality%20illustration&image_size=square_hd" 
                  alt="垃圾桶" 
                  className="w-48 h-48 object-contain"
                />
                {isDropped && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-600 text-white px-4 py-2 rounded-full">
                      成功！
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* 音量指示器 */}
          <div className="mt-8">
            <div className="text-center text-gray-600 mb-2">奶龙紧张度</div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-red-600 h-4 rounded-full" 
                style={{ width: `${Math.min(100, (1 - distance / 300) * 100)}%` }}
              ></div>
            </div>
          </div>
          
          {/* 重置按钮 */}
          <div className="mt-8 text-center">
            <button 
              onClick={handleReset}
              className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
            >
              再来一次
            </button>
          </div>
        </div>

        {/* 游戏说明 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-red-600">游戏说明</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• 拖动奶龙手里的周黑鸭产品向垃圾桶方向移动</li>
            <li>• 距离垃圾桶越近，奶龙的声音越大，打滚越厉害</li>
            <li>• 成功将产品拖入垃圾桶后，可获得抽奖机会</li>
            <li>• 分享游戏结果到社交媒体，可获得额外奖励</li>
          </ul>
        </div>

        {/* 推荐产品 */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-red-600">推荐产品</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 rounded-lg p-4 text-center">
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhou%20Hei%20Ya%20duck%20neck%20product%20with%20milk%20dragon%20design%2C%20red%20packaging%2C%20high%20quality&image_size=square_hd" 
                alt="奶龙联名鸭脖" 
                className="w-32 h-32 object-contain mx-auto mb-4"
              />
              <h3 className="font-bold mb-2">奶龙联名鸭脖</h3>
              <p className="text-red-600 font-bold mb-4">¥39.9</p>
              <Link to="/products">
                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors">
                  查看详情
                </button>
              </Link>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-4 text-center">
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhou%20Hei%20Ya%20chicken%20wings%20product%20with%20milk%20dragon%20design%2C%20red%20packaging%2C%20high%20quality&image_size=square_hd" 
                alt="奶龙联名鸡翅" 
                className="w-32 h-32 object-contain mx-auto mb-4"
              />
              <h3 className="font-bold mb-2">奶龙联名鸡翅</h3>
              <p className="text-red-600 font-bold mb-4">¥29.9</p>
              <Link to="/products">
                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors">
                  查看详情
                </button>
              </Link>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-4 text-center">
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhou%20Hei%20Ya%20gift%20box%20with%20milk%20dragon%20design%2C%20red%20and%20yellow%20packaging%2C%20high%20quality&image_size=square_hd" 
                alt="奶龙联名礼盒" 
                className="w-32 h-32 object-contain mx-auto mb-4"
              />
              <h3 className="font-bold mb-2">奶龙联名礼盒</h3>
              <p className="text-red-600 font-bold mb-4">¥89.9</p>
              <Link to="/products">
                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors">
                  查看详情
                </button>
              </Link>
            </div>
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