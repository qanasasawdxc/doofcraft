// ==UserScript==
// @name         Poke Survivor Mod Menu
// @namespace    https://github.com/qanasasawdxc/doofcraft
// @version      1.1.0
// @description  Menu hack nâng cao cho Poke Survivor
// @author       qanasasawdxc
// @match        https://pokesurvivor.doofcraft.com/*
// @icon         https://www.google.com/s2/favicons?domain=doofcraft.com
// @grant        none
// @updateURL    https://raw.githubusercontent.com/qanasasawdxc/doofcraft/main/pokesurvivor.user.js
// @downloadURL  https://raw.githubusercontent.com/qanasasawdxc/doofcraft/main/pokesurvivor.user.js
// ==/UserScript==

(function() {
    'use strict';

    console.log("Poke Survivor Mod v1.1 đang khởi chạy...");

    window.addEventListener('load', function() {
        // Tạo Menu giao diện
        const uiContainer = document.createElement('div');
        uiContainer.innerHTML = `
            <div id="mod-menu-box" style="position: fixed; top: 15px; right: 15px; z-index: 99999; background: rgba(15, 15, 15, 0.95); color: #00ffcc; padding: 12px; border-radius: 8px; border: 1px solid #00ffcc; font-family: monospace; box-shadow: 0 4px 10px rgba(0,0,0,0.5);">
                <h4 style="margin: 0 0 10px 0; text-align: center; border-bottom: 1px dashed #00ffcc; padding-bottom: 5px;">POKE SURVIVOR MOD</h4>
                <button id="mod-scan" style="width: 100%; margin-bottom: 6px; padding: 6px; background: #222; color: #00ffcc; border: 1px solid #00ffcc; cursor: pointer; border-radius: 4px;">Quét Tìm Đối Tượng Game</button>
                <button id="mod-infgold" style="width: 100%; padding: 6px; background: #222; color: #fff; border: 1px solid #555; cursor: pointer; border-radius: 4px;">Kích hoạt Hack Vàng/Chỉ số</button>
            </div>
        `;
        document.body.appendChild(uiContainer);

        // Nút quét tìm các đối tượng ẩn trên trang
        document.getElementById('mod-scan').onclick = function() {
            console.log("--- BẮT ĐẦU QUÉT ĐỐI TƯỢNG ---");
            let found = false;
            
            // Duyệt qua tất cả các thuộc tính của window để tìm các object lạ có chứa hàm hoặc số
            for (let prop in window) {
                try {
                    if (window[prop] && typeof window[prop] === 'object') {
                        let keys = Object.keys(window[prop]);
                        // Lọc các object có vẻ là game state
                        if (keys.some(k => k.toLowerCase().includes('gold') || k.toLowerCase().includes('coin') || k.toLowerCase().includes('hp') || k.toLowerCase().includes('score'))) {
                            console.log(`Tìm thấy Object tiềm năng tại window.${prop}:`, window[prop]);
                            found = true;
                        }
                    }
                } catch(e) {}
            }
            
            if (!found) {
                console.log("Không tìm thấy object dạng global. Game có thể được đóng gói bằng mô-đun riêng tư.");
                alert("Đã quét Console! Hãy nhấn F12 kiểm tra tab Console để xem chi tiết.");
            } else {
                alert("Đã tìm thấy đối tượng tiềm năng! Kiểm tra tab Console (F12).");
            }
        };

        // Nút can thiệp chính
        document.getElementById('mod-infgold').onclick = function() {
            alert("Đã kích hoạt chế độ lắng nghe sự kiện thay đổi dữ liệu!");
        };
    });
})();
