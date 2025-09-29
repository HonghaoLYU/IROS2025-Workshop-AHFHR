// ...existing code...
// Enhance abstract cells with show more/less behavior
document.addEventListener('DOMContentLoaded', () => {
  const LINES_COLLAPSED = 3; // 默认显示行数，可按需改成 2/4/5 等

  const cells = document.querySelectorAll('td.abstract-column');
  cells.forEach(cell => {
    if (cell.dataset.collapsibleInitialized === 'true') return;

    const html = cell.innerHTML.trim();
    if (!html) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'abstract-collapsible';

    const content = document.createElement('div');
    content.className = 'abstract-content';
    content.innerHTML = html;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'abstract-toggle';
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = 'Show more';

    // 重建单元格内容
    cell.innerHTML = '';
    wrapper.appendChild(content);
    wrapper.appendChild(btn);
    cell.appendChild(wrapper);
    cell.dataset.collapsibleInitialized = 'true';

    // 计算折叠高度（按行高 × 指定行数）
    const computed = window.getComputedStyle(content);
    const lineHeight = parseFloat(computed.lineHeight) || 24;
    const collapsedPx = Math.round(lineHeight * LINES_COLLAPSED);

    // 展开测量完整高度
    content.style.maxHeight = 'none';
    const fullHeight = content.scrollHeight;

    // 短内容无需按钮
    if (fullHeight <= collapsedPx + 2) {
      btn.style.display = 'none';
      return;
    }

    // 初始化为折叠态
    content.style.maxHeight = `${collapsedPx}px`;

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        // 收起
        content.style.maxHeight = `${collapsedPx}px`;
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Show more';
      } else {
        // 展开（每次重新测量，避免字体或窗口变化导致高度不准）
        content.style.maxHeight = 'none';
        const newFull = content.scrollHeight;
        content.style.maxHeight = `${newFull}px`;
        btn.setAttribute('aria-expanded', 'true');
        btn.textContent = 'Show less';
      }
    });
  });
});
// ...existing code...