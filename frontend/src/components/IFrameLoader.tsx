import { Component } from "react";
import { embedDashboard } from "@superset-ui/embedded-sdk";
import './IFrameLoader.css'
import axios from "axios";

function fetchGuestTokenFromBackend(): Promise<string> {
    return new Promise<string>((resolve) => {
        console.log("====> Calling token!")
        axios.post("http://127.0.0.1:8000/fetchGuestToken").then((response) => {
            console.log(response.status);
        });
        resolve("mytoken");
    })
}

export class IFrameLoader extends Component {
    state = {
        isLoaded: false
    }

    componentDidMount() {
        this.setState({ isLoaded: true });
        embedDashboard({
            id: "8", // given by the Superset embedding UI
            supersetDomain: "http://127.0.0.1:9000",
            mountPoint: document.getElementById("my-superset-container")!, // any html element that can contain an iframe
            iframeAttributes: {"id": "my-test-frame", "className": "my-test-frame-class"},
            fetchGuestToken: () => fetchGuestTokenFromBackend(),
        });
    }

    render() {
        return <div id="my-superset-container" className="IFrameLoader"></div>
    }
}
