// ==UserScript==
// @name         Poke Survivor Mod Menu & Auto Bot
// @namespace    https://github.com/qanasasawdxc/doofcraft
// @version      1.2.1
// @description  Menu hack và tính năng Auto cho Poke Survivor
// @author       qanasasawdxc
// @match        https://pokesurvivor.doofcraft.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/qanasasawdxc/doofcraft/main/pokesurvivor.user.js
// @downloadURL  https://raw.githubusercontent.com/qanasasawdxc/doofcraft/main/pokesurvivor.user.js
// ==/UserScript==

(function() {
    'use strict';

    console.log("Poke Survivor Auto Bot & Mod đang khởi chạy...");

    window.addEventListener('load', function() {
        // Tạo giao diện Menu nổi trên game
        const uiContainer = document.createElement('div');
        uiContainer.innerHTML = `
            <div id="mod-menu-box" style="position: fixed; top: 15px; right: 15px; z-index: 99999; background: rgba(15, 15, 15, 0.95); color: #00ffcc; padding: 12px; border-radius: 8px; border: 1px solid #00ffcc; font-family: monospace; box-shadow: 0 4px 10px rgba(0,0,0,0.5);">
                <h4 style="margin: 0 0 10px 0; text-align: center; border-bottom: 1px dashed #00ffcc; padding-bottom: 5px;">POKE SURVIVOR AUTO</h4>
                <button id="btn-auto-action" style="width: 100%; margin-bottom: 6px; padding: 8px; background: #222; color: #00ffcc; border: 1px solid #00ffcc; cursor: pointer; border-radius: 4px; font-weight: bold;">Bật Auto Tác Vụ: TẮT</button>
                <button id="btn-auto-click" style="width: 100%; padding: 8px; background: #222; color: #fff; border: 1px solid #555; cursor: pointer; border-radius: 4px;">Auto Click Nhặt Đồ: TẮT</button>
            </div>
        `;
        document.body.appendChild(uiContainer);

        let isAutoActionRunning = false;
        let autoActionInterval = null;

        let isAutoClickRunning = false;
        let autoClickInterval = null;

        // 1. Tính năng Auto Tác Vụ (Chạy vòng lặp quét/ép chỉ số hoặc gọi hàm liên tục)
        document.getElementById('btn-auto-action').onclick = function() {
            isAutoActionRunning = !isAutoActionRunning;
            this.style.background = isAutoActionRunning ? '#006644' : '#222';
            this.innerText = `Bật Auto Tác Vụ: ${isAutoActionRunning ? 'BẬT' : 'TẮT'}`;

            if (isAutoActionRunning) {
                console.log("Đã bật Auto Tác Vụ liên tục...");
                autoActionInterval = setInterval(function() {
                    // Tại đây bạn có thể chèn logic ép thay đổi giá trị nếu tìm được biến game trong tương lai
                    // Ví dụ: kiểm tra các thuộc tính ẩn trong các khung render của trình duyệt
                }, 1000);
            } else {
                clearInterval(autoActionInterval);
                console.log("Đã tắt Auto Tác Vụ.");
            }
        };

        // 2. Tính năng Auto Click (Tự động click chuột liên tục vào giữa màn hình game để chiến đấu/nhặt đồ)
        document.getElementById('btn-auto-click').onclick = function() {
            isAutoClickRunning = !isAutoClickRunning;
            this.style.background = isAutoClickRunning ? '#660044' : '#222';
            this.innerText = `Auto Click Nhặt Đồ: ${isAutoClickRunning ? 'BẬT' : 'TẮT'}`;

            if (isAutoClickRunning) {
                console.log("Đã kích hoạt Auto Click!");
                autoClickInterval = setInterval(function() {
                    // Mô phỏng sự kiện click vào màn hình game
                    const canvas = document.querySelector('canvas');
                    if (canvas) {
                        const rect = canvas.getBoundingClientRect();
                        const clientX = rect.left + rect.width / 2;
                        const clientY = rect.top + rect.height / 2;

                        // Tạo sự kiện mousedown và mouseup giả lập
                        ['mousedown', 'mouseup', 'click'].forEach(eventType => {
                            const event = new MouseEvent(eventType, {
                                view: window,
                                bubbles: true,
                                cancelable: true,
                                clientX: clientX,
                                clientY: clientY
                            });
                            canvas.dispatchEvent(event);
                        });
                    }
                }, 200); // Click mỗi 200ms
            } else {
                clearInterval(autoClickInterval);
                console.log("Đã tắt Auto Click.");
            }
        };
    });
})();
