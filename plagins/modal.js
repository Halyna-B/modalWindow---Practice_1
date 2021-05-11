function _createModal(options) {
        const modal = document.createElement('div');
        modal.classList.add('vmodal');
        modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="vmodal-header">
                    <span class="vmodal-title">Modal Title</span>
                    <span class="vmodal-close">×</span>
                </div>
                <div class="vmodal-body">
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="vmodal-footer">
                    <button>Ok</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
        `);
        document.body.appendChild(modal);
        return modal;
}

$.modal = function(options){
    const $modal = _createModal(options);
 return {
     open(){
         $modal.classList.add('open');
     },
     close(){
         $modal.classList.remove('open');
     },
     destroy(){}
 }
}

document.querySelector('.btn-open-modal').addEventListener('click', () => modal.open());

const closeBtn = document.querySelector('vmodal-close');
closeBtn.addEventListener('click', () => modal.close());