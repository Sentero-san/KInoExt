document.getElementById('redirectBtn').addEventListener('click', async () => {
    // Получаем текущую активную вкладку
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    if (tab && tab.url) {
        let currentUrl = tab.url;

        // Проверяем, что мы действительно на Кинопоиске
        if (currentUrl.includes('kinopoisk.ru')) {
            // Заменяем доменное имя
            let newUrl = currentUrl.replace('kinopoisk.ru', 'kinokino.vip');
            
            // Перенаправляем текущую вкладку на новый URL
            chrome.tabs.update(tab.id, { url: newUrl });
            
            // Закрываем маленькое окошко расширения
            window.close();
        }
        else if (currentUrl.includes('vk.com')) {
            let fileUrl = chrome.runtime.getURL('icond.png');     
            chrome.tabs.create({ url: fileUrl }, (tab) => {
               alert('ты҉ п҉ро҉кл҉ят҉ ');
               window.close();
            });           
         }    
        else if (currentUrl.includes('market.dota2')) {
            let fileUrl = chrome.runtime.getURL('iconz.png');     
            chrome.tabs.create({ url: fileUrl }, (tab) => {
               alert('и̶т̶с̶а̶п̶с̶ е̶н̶ о̶г̶Е̶');
               window.close();
            });          
            }     
        
        else {
            alert('Вы не на сайте Кинопоиск!');
        }
    }
});