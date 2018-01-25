import React, {Component} from 'react';
import {
    StyleSheet,
    View,

    Dimensions
} from 'react-native';

// import Button from './button';


import {

    Button,
    Text,

} from "native-base";


const {width, height} = Dimensions.get('window');
//模块声名并导出
export default class Stepper extends Component {
    //属性声名
    static propTypes = {
        // min: React.PropTypes.number, // 最小值
        // max: React.PropTypes.number, // 最大值
        // step: React.PropTypes.number, // 增减数
        // defaultValue: React.PropTypes.number, // 默认值
        // onChange: React.PropTypes.func, //
    };
    //默认属性
    static defaultProps = {
        min: 0, // 默认最小值
        max: 99, // 默认最大值
        step: 1, // 增减数为1
        defaultValue: 0, // 默认值为1
    }

    //构造函数
    constructor(props) {
        super(props);
        this.state = { //状态机变量声明
            currentNumber: this.props.defaultValue,
            interval: 200,//控制增加、减少数量间隔
        }
    }

    //渲染
    render() {
        console.log('-------', this.props.defaultValue);
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={{flexDirection: 'row', }}>
                    <Button style={{ backgroundColor: "#2EB5AC"}}
                        onPress={() => this.decrease()}
                        onLongPress={() => this.longDecrease()}
                        onPressOut={() => this.onTouchEnd()}>
                        <Text>－</Text></Button>
                    <View style={{
                        backgroundColor: "#e9f8f7",
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <Text style={{textAlign: 'center', color: "#00c4b4", fontSize: 16, width: 40}}>{this.state.currentNumber}</Text>
                    </View>

                    <Button style={{ backgroundColor: "#2EB5AC"}}
                        onPress={() => this.increase()}
                        onLongPress={() => this.longIncrease()}
                        onPressOut={() => this.onTouchEnd()}
                    ><Text>＋</Text></Button>
                </View>
            </View>
        );
    }

    decrease() { // 单击减少


        let newValue = this.state.currentNumber - this.props.step;
        if (newValue < this.props.min) {
            newValue = this.props.min;
        }
        this.setState({
            currentNumber: newValue,
        })
    }

    increase() { // 单击增加

        let newValue = this.state.currentNumber + this.props.step;

        if (newValue > this.props.max) {
            newValue = this.props.max;
        }

        this.setState({
            currentNumber: newValue
        });
    }


    longDecrease() { // 长按减少
        this.autoInterval = setInterval(this.decrease.bind(this), this.state.interval);
    }

    longIncrease() { // 长按增加
        this.autoInterval = setInterval(this.increase.bind(this), this.state.interval);
    }

    onTouchEnd() { // 手指离开的时候，移除定时器
        if (this.autoInterval) {
            clearInterval(this.autoInterval)
            this.autoInterval = null;
        }
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //width: 200,
    },
    buttonStyle: {
        borderRadius: 4,
        paddingTop: 5,
        paddingBottom: 5,
        width: 30,
        height: 22,
    },
})

//
//     <Stepper
// onChange={(val) => {Console.log(val)}}
// defaultValue={1}
// min={1}
// max={100}
// step={1} />
