export const initializeToggleManager = () => {
    const toggleOptions = document.querySelectorAll('.toggle-option');
  
    // Add listener clicks on every elements
    toggleOptions.forEach(option => {
  
      option.addEventListener('click', () => {
        // Remove class "toggle-active" from all elements
        toggleOptions.forEach(option => {
          option.classList.remove('toggle-active');
        });
  
        // Add class "toggle-active" after click
        option.classList.add('toggle-active');
      });
    });
};
  