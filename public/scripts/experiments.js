function setExperiment(experimentName, treatment) {
    localStorage.setItem(experimentName, treatment);
}

if(localStorage.getItem('zombies-loadout') === null) {
    if(Math.random() < 0.5) {
        setExperiment('zombies-loadout', 'enabled');
    } else {
        setExperiment('zombies-loadout', 'disabled');
    }
}
