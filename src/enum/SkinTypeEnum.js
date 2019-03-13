function getThemeValue(value){

    console.log('a');

    if(!value){
        return '';
    }

    if(value === "少女粉"){
        return 'girl';
    }

    if(value === "天空蓝"){
        return 'blue';
    }

    if(value === "茄子紫"){
        return 'purple';
    }

    if(value === '清新绿'){
        return 'green';
    }

    if(value === '警告色'){
        return 'warning';
    }

    if(value === '危险红'){
        return 'danger';
    }

}

export default {
    getThemeValue,
}