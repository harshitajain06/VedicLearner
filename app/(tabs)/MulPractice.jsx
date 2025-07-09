import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";

const MulPractice = ({ navigation }) => {
  const [question, setQuestion] = useState(generateQuestion());

  function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1; // 1 to 10
    const num2 = Math.floor(Math.random() * 10) + 1; // 1 to 10
    const correctAnswer = num1 * num2;

    const wrongAnswers = new Set();
    while (wrongAnswers.size < 3) {
      const randomAnswer = correctAnswer + Math.floor(Math.random() * 10) - 5;
      if (randomAnswer !== correctAnswer && randomAnswer > 0) {
        wrongAnswers.add(randomAnswer);
      }
    }

    const options = [...wrongAnswers, correctAnswer].sort(
      () => Math.random() - 0.5
    );
    return { num1, num2, correctAnswer, options };
  }

  const handleOptionPress = (option) => {
    if (option === question.correctAnswer) {
      Alert.alert("Correct!", "You selected the right answer.", [
        {
          text: "Next Question",
          onPress: () => setQuestion(generateQuestion()),
        },
      ]);
    } else {
      Alert.alert("Incorrect", "That is not the correct answer.", [
        { text: "Try Again" },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Multiplication Practice</Text>
      </View>

      <View style={styles.questionBox}>
        <Text style={styles.questionText}>
          What is {question.num1} × {question.num2}?
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.optionButton, styles[`option${index + 1}`]]}
            onPress={() => handleOptionPress(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={[styles.button, styles.home]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back to Practice Page</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006666",
  },
  header: {
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: "#567396",
    alignItems: "center",
    marginBottom: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  questionBox: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#00291b",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  questionText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  optionsContainer: {
    flexGrow: 1,
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  optionButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  option1: {
    backgroundColor: "#ffe600",
  },
  option2: {
    backgroundColor: "#ffa600",
  },
  option3: {
    backgroundColor: "#ff5500",
  },
  option4: {
    backgroundColor: "#ff0000",
  },
  optionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  home: {
    backgroundColor: "#212121",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default MulPractice;
