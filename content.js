    function findBell() {
      const bellElement = document.querySelector('ytd-notification-topbar-button-renderer');
      if (bellElement) {
        bellElement.remove();
        console.log("Bell Removed")
      }
  }

    setInterval(findBell, 100);
