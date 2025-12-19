function removeItemsContainingImage() {
    const targetClass = 'hr_bm';
    const items = document.querySelectorAll(`.${targetClass}`);
    const targetImageUrl = 'https://ae01.alicdn.com/kf/S1887a285b60743859ac7bdbfca5e0896Z/154x64.png';

    console.log(`[Extension] Found ${items.length} items with class ${targetClass}.`);

    const removeIfContainsTargetImage = item => item.querySelector(`img[src*="${targetImageUrl}"]`) && item.remove();
    items.forEach(removeIfContainsTargetImage);

    if (!window.__removeItemsObserver) {
        const observer = new MutationObserver(() => {
            removeItemsContainingImage();
        });

        observer.observe(document.body, { childList: true, subtree: true });
        window.__removeItemsObserver = observer;
    }
}

removeItemsContainingImage();