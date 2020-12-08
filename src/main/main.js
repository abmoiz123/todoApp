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
    TextInput,
    FlatList
} from 'react-native';
// import SwipeableViews from 'react-swipeable-views-native';
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/FontAwesome';


class Main extends Component {
    constructor() {
        super()
        this.state = {
            todoid: 1,
            checkbox: false,
            addtodo: false,
            edittodo: false,
            addtodoinput: true,
            todovalue: null,
            editid: null,
            editvalue: null,
            todolist: []
        }
    }
    checkbox = id => {
        let todolist = this.state.todolist
        let findid = todolist.findIndex((item => item.id === id))
        todolist[findid].check = true
        this.setState({
            todolist: todolist
        })
    }
    addtodo = () => {
        // let id = this.state.todoid
        if (this.state.todovalue !== null) {
            let todolist = [...this.state.todolist]
            let id = this.state.todoid

            todolist.push(
                { id: id, text: this.state.todovalue, check: false }
            )
            this.setState({
                todolist: todolist,
                id: this.state.todoid += 1,
            })
        }
        this.setState({
            addtodo: false,
            addtodoinput: true,
            todovalue: null
        })
        // console.log(id)
    }
    deletetodo = id => {
        const filteredData = this.state.todolist.filter(item => item.id !== id);
        this.setState({ todolist: filteredData });
    }
    edittodo = id => {
        this.setState({
            editid: id,
            addtodoinput: false,
            edittodo: true
        })
    }
    edittodoo = () => {
        let id = this.state.editid
        let editvalue = this.state.editvalue
        let todolist = this.state.todolist
        let findid = todolist.findIndex((item => item.id === id))
        todolist[findid].text = editvalue
        this.setState({
            todolist: todolist,
            editvalue: null,
            edittodo: false,
            addtodoinput: true
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
                padding: 7,
                paddingRight: 10,
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
                margin: 0,
                padding: 0,
            },
            todotext2: {
                fontSize: 20,
                flex: 1,
                textTransform: "capitalize",
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
            },
            deletetodoView: {
                justifyContent: "center",
                textAlign: "center",
                marginLeft: 5,
            },
            deletetodo: {
                color: 'red',
            },
            edittodo: {
                color: 'green',
            },
            checkbox: {
                margin: 0,
                padding: 0
            }
        });
        // var swipeoutRightBtns = [
        //     {
        //         backgroundColor: 'none',
        //         component: (
        //             <View style={styles.deliconview}>
        //                 <Icon name="edit" size={30} />
        //             </View>
        //         )
        //     },
        //     {
        //         backgroundColor: 'none',
        //         component: (
        //             <View style={styles.deliconview}>
        //                 <Icon name="trash" size={30} onPress={(e) => this.delete(e)} />
        //             </View>
        //         )
        //     }
        // ];

        // var swipeoutLeftBtns = [
        //     {
        //         backgroundColor: 'none',
        //         component: (
        //             <View style={styles.deliconview}>
        //                 <CheckBox
        //                     value={false}
        //                     style={styles.checkbox}
        //                 />
        //             </View>
        //         )


        //     }
        // ];
        let todolist = this.state.todolist
        return (
            <View style={styles.container} >
                <View style={styles.headerView}>
                    <Text style={styles.headerText}>TodoApp</Text>
                </View>
                <View style={styles.centerView}>
                    <ImageBackground style={styles.backimage} imageStyle={{ resizeMode: 'cover' }} source={require('../Images/backimage.jpg')}>
                        {/* <ScrollView style={styles.scrolling}> */}
                        <FlatList
                            data={todolist}
                            keyExtractor={item => item.id.toString()}
                            renderItem={(todolist) => {
                                return (
                                    <View style={styles.todomain}>
                                        <View style={styles.deletetodoView}>
                                            <CheckBox
                                                value={todolist.item.check}
                                                onValueChange={() => this.checkbox(todolist.item.id)}
                                                style={styles.checkbox}
                                            />
                                        </View>
                                        {todolist.item.check ? (
                                            <Text style={styles.todotext2}>
                                                {todolist.item.text}
                                            </Text>
                                        ) : (
                                                <Text style={styles.todotext}>
                                                    {todolist.item.text}
                                                </Text>
                                            )}
                                        <View style={styles.deletetodoView}>
                                            <Icon style={styles.edittodo} name="edit" size={30} onPress={() => this.edittodo(todolist.item.id)} />
                                        </View>
                                        <View style={styles.deletetodoView}>
                                            <Icon name="trash" style={styles.deletetodo} size={30} onPress={() => this.deletetodo(todolist.item.id)} />
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </ImageBackground>
                </View>
                {this.state.addtodoinput ? (
                    <View style={styles.addtodo}>
                        <Icon style={styles.addtodoicon} onPress={() => this.setState({ addtodo: true, addtodoinput: false })} name="circle" size={100} />
                        <Icon style={styles.addtodoicon2} onPress={() => this.setState({ addtodo: true, addtodoinput: false })} name="plus" size={50} />
                    </View>
                ) : null}
                {this.state.addtodo ? (
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
                ) : null}
                {this.state.edittodo ? (
                    <View style={styles.addtodoinput}>
                        <TextInput
                            ref={(el) => { this.editvalue = el; }}
                            onChangeText={(editvalue) => this.setState({ editvalue })}
                            value={this.state.editvalue}
                            style={styles.addtodoinput2}
                            placeholder={'Edit Your ToDo'}
                        />
                        <View style={styles.addtodoinput4}>
                            <Icon style={styles.addtodoinput3} onPress={this.edittodoo} name="plus" size={40} />
                        </View>
                    </View>
                ) : null}
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>ADD TODO</Text>
                </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}
export default Main;