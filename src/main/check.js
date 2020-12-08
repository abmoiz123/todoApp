// import { Icon } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ImageBackground,
    CheckBox,
    TextInput
} from 'react-native';
// import SwipeableViews from 'react-swipeable-views-native';
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/FontAwesome';


class Main extends Component {
    constructor() {
        super()
        this.state = {
            addtodoinput: true,
            todovalue: null,
            todolist: ''
        }
    }
    addtodo = () => {
        if (this.state.todovalue !== null) {
            this.state.todolist.push(
                <View style={styles.todomain}>
                    <Text style={styles.todotext}>
                        Lorem ipsum dolor sit amet moiz.
                    </Text>
                </View>
            )
        }
        this.setState({
            addtodoinput: true,
            todovalue: null
        })
    }
    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: 'white',
            },
            headerView: {
                marginTop: 30,
                flex: 1,
                width: '100%',
                alignItems: "flex-start",
                backgroundColor: 'royalblue',
                alignItems: "center",
                justifyContent: "center",
                borderBottomWidth: 2,
                borderBottomColor: 'black'
            },
            headerText: {
                width: '100%',
                fontSize: 30,
                fontWeight: "bold",
                color: 'white',
                textShadowOffset: { width: 3, height: 3 },
                textShadowRadius: 10,
                textShadowColor: 'black',
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"
            },
            centerView: {
                flex: 10,
            },
            backimage: {
                width: '100%',
                height: '100%',
            },
            scrolling: {
                paddingTop: 10,
                paddingBottom: 10
            },
            text: {
                fontSize: 50,
                flexWrap: 'wrap',
            },
            footerView: {
                flex: 1,
                width: '100%',
                alignItems: "flex-end",
                backgroundColor: 'royalblue',
                alignItems: "center",
                justifyContent: "center",
                borderTopWidth: 2,
                borderTopColor: 'black'
            },
            footerText: {
                width: '100%',
                fontSize: 30,
                fontWeight: "bold",
                color: 'white',
                textShadowOffset: { width: 3, height: 3 },
                textShadowRadius: 10,
                textShadowColor: 'black',
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"
            },
            todomain: {
                flexDirection: 'row',
                backgroundColor: 'white',
                margin: 5,
                borderRadius: 30,
                padding: 10,
                paddingLeft: 15,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 9,
            },
            todotext: {
                fontSize: 20,
                flex: 1,
                textTransform: "capitalize",
                textAlign: "justify"
            },
            todotext2: {
                fontSize: 20,
                flex: 1,
                textTransform: "capitalize",
                textAlign: "justify",
                color: 'gray',
                textDecorationLine: "line-through"
            },
            deliconview: {
                height: 50,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: 'white',
                marginTop: 5,
            },
            addtodo: {
                position: "absolute",
                bottom: 40,
                zIndex: 1,
                alignSelf: "center"
            },
            addtodoicon: {
                color: 'royalblue',
            },
            addtodoicon2: {
                position: "absolute",
                bottom: 20,
                zIndex: 1,
                alignSelf: "center",
                color: 'white',
            },
            addtodoinput: {
                // flex: 1,
                height: 50,
                width: '100%',
                flexDirection: "row",
                backgroundColor: 'royalblue',
                borderTopWidth: 2,
                borderTopColor: 'black'
            },
            addtodoinput2: {
                width: '80%',
                backgroundColor: 'white',
                fontSize: 25
                // borderWidth: 2
            },
            addtodoinput3: {
                color: 'white',
            },
            addtodoinput4: {
                width: '20%',
                justifyContent: "center",
                alignItems: "center",
            }
        });
        var swipeoutRightBtns = [
            {
                backgroundColor: 'none',
                component: (
                    <View style={styles.deliconview}>
                        <Icon name="edit" size={30} />
                    </View>
                )
            },
            {
                backgroundColor: 'none',
                component: (
                    <View style={styles.deliconview}>
                        <Icon name="trash" size={30} />
                    </View>
                )
            }
        ];

        var swipeoutLeftBtns = [
            {
                backgroundColor: 'none',
                component: (
                    <View style={styles.deliconview}>
                        <CheckBox
                            value={false}
                            style={styles.checkbox}
                        />
                    </View>
                )


            }
        ];
        return (
            <View style={styles.container} >
                <View style={styles.headerView}>
                    <Text style={styles.headerText}>TodoApp</Text>
                </View>
                <View style={styles.centerView}>
                    <ImageBackground style={styles.backimage} imageStyle={{ resizeMode: 'cover' }} source={require('../Images/backimage.jpg')}>
                        <ScrollView style={styles.scrolling}>
                            <View style={styles.todomain}>
                                <Text style={styles.todotext}>
                                    Lorem ipsum dolor sit amet moiz.
                            </Text>
                                {/* <CheckBox
                                value={true}
                                // onValueChange={setSelection}
                                style={styles.checkbox}
                            /> */}
                            </View>
                            {/* <SwipeableViews style={styles.slideContainer}>
                                <View style={styles.todomain}>
                                    <Text style={styles.todotext}>
                                        Lorem ipsum dolor sit amet moiz.
                                    </Text>
                                </View>
                                <View style={styles.todomain}>
                                    <Text style={styles.todotext}>
                                        delete
                                    </Text>
                                </View>
                            </SwipeableViews> */}

                            {/* <Swipeout left={swipeoutLeftBtns} right={swipeoutRightBtns} backgroundColor={'none'}>
                                <View style={styles.todomain}>
                                    <Text style={styles.todotext}>
                                        Lorem ipsum dolor sit amet moiz.
                                    </Text>
                                    <Text style={styles.todotext2}>
                                        Lorem ipsum dolor sit amet moiz.
                                    </Text>
                                </View>
                            </Swipeout> */}
                            <Swipeout left={swipeoutLeftBtns} right={swipeoutRightBtns} backgroundColor={'none'}>
                                <View style={styles.todomain}>
                                    <Text style={styles.todotext}>
                                        Lorem ipsum dolor sit amet moiz.
                                    </Text>
                                    {/* <Text style={styles.todotext2}>
                                        Lorem ipsum dolor sit amet moiz.
                                    </Text> */}
                                </View>
                                {this.state.todolist &&
                                    <View>
                                        {this.state.todolist}
                                    </View>
                                }
                            </Swipeout>
                        </ScrollView>
                    </ImageBackground>
                </View>
                {this.state.addtodoinput ? (
                    <View style={styles.addtodo}>
                        <Icon style={styles.addtodoicon} onPress={() => this.setState({ addtodoinput: false })} name="circle" size={100} />
                        <Icon style={styles.addtodoicon2} onPress={() => this.setState({ addtodoinput: false })} name="plus" size={50} />
                    </View>
                ) : (
                        <View style={styles.addtodoinput}>
                            <TextInput
                                ref={(el) => { this.todovalue = el; }}
                                onChangeText={(todovalue) => this.setState({ todovalue })}
                                value={this.state.todovalue}
                                style={styles.addtodoinput2}
                                placeholder={'Add Your ToDo'}
                            />
                            <View style={styles.addtodoinput4}>
                                <Icon style={styles.addtodoinput3} onPress={this.addtodo} name="plus" size={40} />
                            </View>
                        </View>
                    )}
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>ADD TODO</Text>
                </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}
export default Main;