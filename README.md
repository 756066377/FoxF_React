# Android Tool UI

基于Tauri + React的安卓工具软件，提供设备管理、驱动刷入等功能。

## 功能特性

- 🚀 优雅的启动页面与主页切换动画
- 📱 实时设备信息展示
- 👑 会员功能管理
- 🔧 驱动刷入工具
- 🔒 追锁版本（会员专属）
- 🎯 单透版本（免费功能）

## 项目结构 
src/
├── components/ # 可复用组件
│ ├── Layout/ # 布局组件
│ ├── DeviceInfo/ # 设备信息组件
│ ├── MemberCard/ # 会员信息组件
│ └── ActionCards/ # 功能卡片组件
├── pages/ # 页面组件
│ ├── Launch/ # 启动页面
│ └── Home/ # 主页
├── hooks/ # 自定义Hooks
├── store/ # 状态管理
└── styles/ # 样式文件

现在让我们创建核心页面组件。首先是启动页面：
typescript:src/pages/Launch/index.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Launch.module.css';
const Launch: React.FC = () => {
const navigate = useNavigate();
const handleLaunch = () => {
navigate('/home');
};
return (
<motion.div
className={styles.launchContainer}
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
>
<div className={styles.content}>
<motion.h1
className={styles.title}
initial={{ y: -50 }}
animate={{ y: 0 }}
transition={{ delay: 0.2 }}
>
Android Tool
</motion.h1>
<motion.button
className={styles.launchButton}
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
onClick={handleLaunch}
>
开始使用
</motion.button>
</div>
</motion.div>
);
};
export default Launch;

对应的样式文件：
css:src/pages/Launch/Launch.module.css
.launchContainer {
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
}
.content {
text-align: center;
}
.title {
color: #ffffff;
font-size: 3rem;
margin-bottom: 2rem;
text-shadow: 0 0 10px rgba(255,255,255,0.3);
}
.launchButton {
padding: 1rem 3rem;
font-size: 1.2rem;
border: none;
border-radius: 50px;
background: linear-gradient(45deg, #007AFF, #00C6FF);
color: white;
cursor: pointer;
box-shadow: 0 4px 15px rgba(0, 122, 255, 0.3);
transition: all 0.3s ease;
}
.launchButton:hover {
box-shadow: 0 6px 20px rgba(0, 122, 255, 0.4);

接下来是主页组件：
typescript:src/pages/Home/index.tsx
import React from 'react';
import { motion } from 'framer-motion';
import DeviceInfo from '../../components/DeviceInfo';
import MemberCard from '../../components/MemberCard';
import ActionCards from '../../components/ActionCards';
import styles from './Home.module.css';
const Home: React.FC = () => {
return (
<motion.div
className={styles.homeContainer}
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
>
<div className={styles.header}>
<h1>设备管理</h1>
</div>
<div className={styles.content}>
<motion.div
className={styles.section}
initial={{ y: 20, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ delay: 0.2 }}
>
<DeviceInfo />
</motion.div>
<motion.div
className={styles.section}
initial={{ y: 20, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ delay: 0.4 }}
>
<MemberCard />
</motion.div>
<motion.div
className={styles.section}
initial={{ y: 20, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ delay: 0.6 }}
>
<ActionCards />
</motion.div>
</div>
</motion.div>
);
};
export default Home;

对应的样式文件：
css:src/pages/Home/Home.module.css
.homeContainer {
min-height: 100vh;
background: #f5f5f5;
padding: 2rem;
}
.header {
margin-bottom: 2rem;
}
.header h1 {
color: #333;
font-size: 2rem;
}
.content {
display: grid;
gap: 2rem;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.section {
background: white;
border-radius: 1rem;
padding: 1.5rem;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
@media (max-width: 768px) {
.homeContainer {
padding: 1rem;
}
.content {
grid-template-columns: 1fr;
}
}

这是基础的页面结构设计。我们采用了：

1. 渐变背景和精心设计的启动按钮
2. 流畅的页面切换动画
3. 响应式网格布局
4. 卡片式设计展示不同功能模块
5. 优雅的动画过渡效果

接下来我需要为你实现具体的功能组件（DeviceInfo、MemberCard、ActionCards）。你想先看哪个组件的实现？