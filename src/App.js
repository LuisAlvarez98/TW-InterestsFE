import "./App.css";
import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";

const Container = styled.div`
  background-color: #00acee;
  height: 300px;
  width: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Title = styled.h1`
  font-size: 2.4em;
  padding: 0;
  margin: 0;
  color: white;
`;

const TextFieldWrapper = styled(TextField)`
  fieldset {
    border-radius: 50px;
  }
`;

const App = () => {
  const [handlerOne, setHandlerOne] = React.useState("");
  const [handlerTwo, setHandlerTwo] = React.useState("");
  const [data, setData] = React.useState([]);

  const handleGo = async () => {
    if (handlerOne != "" && handlerTwo != "") {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setData(res);
        });
    }
  };

  const handleChangeOne = (e) => {
    setHandlerOne(e.target.value);
  };
  const handleChangeTwo = (e) => {
    setHandlerTwo(e.target.value);
  };

  return (
    <div
      className="App"
      style={{ minHeight: "100vh", backgroundColor: "#00acee" }}
    >
      <Container>
        <Title>#Interests</Title>
      </Container>
      <Container>
        <Card style={{ width: "50%", borderRadius: "32px" }}>
          <CardContent>
            <h3>
              Welcome to #Interests please input the handles you want to analyze
            </h3>
            <Grid
              container
              spacing={1}
              style={{
                justifyContent: "center",
                marginTop: "3em",
              }}
            >
              <Grid item xs={12} md={6}>
                <TextFieldWrapper
                  id="outlined-basic"
                  label="Handler 1"
                  onChange={handleChangeOne}
                  value={handlerOne}
                  placeholder="@TwitterU"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextFieldWrapper
                  id="outlined-basic"
                  label="Handler 2"
                  onChange={handleChangeTwo}
                  value={handlerTwo}
                  placeholder="@ElonMusk"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  style={{
                    marginTop: "3em",
                    borderRadius: 35,
                    backgroundColor: "#00acee",
                    padding: "14px 18px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    width: "150px",
                    color: "#fff",
                  }}
                  onClick={handleGo}
                >
                  #Go
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default App;
