const countDevelopers = list => {
    let europeanJSDevCount = 0;
    
    list.forEach(developer => {
      if (developer.continent === 'Europe' && developer.language === 'JavaScript') europeanJSDevCount += 1;
    });
    
    return europeanJSDevCount;
  };
  