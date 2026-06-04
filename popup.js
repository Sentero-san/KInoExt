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
        } else {
            alert('Вы не на сайте Кинопоиск!');
        }
    }
});