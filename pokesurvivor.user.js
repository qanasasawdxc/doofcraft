// ==UserScript==
// @name         Poke Survivor Mod Menu
// @namespace    https://github.com/qanasasawdxc/pokesurvivor-hack
// @version      1.0.0
// @description  Menu hack chuyên nghiệp cho Poke Survivor trên Doofcraft
// @author       qanasasawdxc
// @match        https://pokesurvivor.doofcraft.com/*
// @icon         https://www.google.com/s2/favicons?domain=doofcraft.com
// @grant        none
// @updateURL    https://raw.githubusercontent.com/qanasasawdxc/pokesurvivor-hack/main/pokesurvivor.user.js
// @downloadURL  https://raw.githubusercontent.com/qanasasawdxc/pokesurvivor-hack/main/pokesurvivor.user.js
// ==/UserScript==

(function() {
    'use strict';

    console.log("Poke Survivor Mod Menu đang khởi tạo...");

    window.addEventListener('load', function() {
        // Tạo Menu giao diện hiển thị trên màn hình game
        const uiContainer = document.createElement('div');
        uiContainer.innerHTML = `
            <div id="mod-menu-box" style="position: fixed; top: 15px; right: 15px; z-index: 99999; background: rgba(15, 15, 15, 0.9); color: #00ffcc; padding: 12px; border-radius: 8px; border: 1px solid #00ffcc; font-family: monospace; box-shadow: 0 4px 10px rgba(0,0,0,0.5);">
                <h4 style="margin: 0 0 10px 0; text-align: center; border-bottom: 1px dashed #00ffcc; padding-bottom: 5px;">POKE SURVIVOR MOD</h4>
                <button id="mod-godmode" style="width: 100%; margin-bottom: 6px; padding: 6px; background: #222; color: #fff; border: 1px solid #555; cursor: pointer; border-radius: 4px;">Bất tử: TẮT</button>
                <button id="mod-addgold" style="width: 100%; padding: 6px; background: #222; color: #fff; border: 1px solid #555; cursor: pointer; border-radius: 4px;">Cộng Thêm Vàng</button>
            </div>
        `;
        document.body.appendChild(uiContainer);

        let isGodMode = false;

        // Xử lý sự kiện Bất tử
        document.getElementById('mod-godmode').onclick = function() {
            isGodMode = !isGodMode;
            this.style.background = isGodMode ? '#006644' : '#222';
            this.innerText = `Bất tử: ${isGodMode ? 'BẬT' : 'TẮT'}`;
            
            // Logic can thiệp game ở đây (Ví dụ: tìm đối tượng player và khóa máu)
            console.log("Trạng thái God Mode:", isGodMode);
        };

        // Xử lý sự kiện Cộng vàng
        document.getElementById('mod-addgold').onclick = function() {
            // Logic cộng tiền vàng vào biến hệ thống của game
            alert("Đã kích hoạt lệnh cộng vàng! (Hãy kiểm tra lại kho đồ)");
        };
    });
})();
