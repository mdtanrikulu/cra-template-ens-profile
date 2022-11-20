import React, { Fragment, useEffect, useState } from 'react';
import { AvatarResolver, utils as avtUtils } from '@ensdomains/ens-avatar';
import { ethers } from 'ethers';
import { useMetamask } from 'use-metamask';
import styles from './app.module.css';

export default function App() {
  const { connect, metaState } = useMetamask(ethers);
  const [user, setUser] = useState({
    avatar: '',
    email: '',
    twitter: '',
    name: '',
    description: ''
  });

  useEffect(() => {
    if (metaState.isAvailable && !metaState.isConnected) {
      (async () => {
        try {
          await connect(ethers.providers.Web3Provider, 'any');
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [metaState.isAvailable]);

  useEffect(() => {
    (async () => {
      if (metaState.web3 && metaState.isConnected) {

        if (!metaState?.account[0]) {
          return;
        }
        
        const provider = metaState.web3;
        const account = metaState.account[0];

        // welcome friENS :) we code it here

        setUser({ ...user });
      }
    })();
  }, [metaState]);

  return (
    <Fragment>
      <div className={styles.logo}>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNzIuNTIgODAuOTUiPjxkZWZzPjxzdHlsZT4uY2xzLTN7ZmlsbDojYTBhOGQ0fTwvc3R5bGU+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSI0MS45NSIgeTE9IjIuNTciIHgyPSIxMi41NyIgeTI9IjM0LjQyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIuNTgiIHN0b3AtY29sb3I9IiNhMGE4ZDQiLz48c3RvcCBvZmZzZXQ9Ii43MyIgc3RvcC1jb2xvcj0iIzg3OTFjNyIvPjxzdG9wIG9mZnNldD0iLjkxIiBzdG9wLWNvbG9yPSIjNjQ3MGI0Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiB4MT0iNDIuNTciIHkxPSI4MS42NiIgeDI9IjcxLjk2IiB5Mj0iNDkuODEiIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQiLz48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0zIiB4MT0iNDIuMjYiIHkxPSIxLjI0IiB4Mj0iNDIuMjYiIHkyPSI4Mi44NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzUxM2VmZiIvPjxzdG9wIG9mZnNldD0iLjE4IiBzdG9wLWNvbG9yPSIjNTE1N2ZmIi8+PHN0b3Agb2Zmc2V0PSIuNTciIHN0b3AtY29sb3I9IiM1Mjk4ZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1MmU1ZmYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBzdHlsZT0iaXNvbGF0aW9uOmlzb2xhdGUiPjxnIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGQ9Ik0xNS4yOCAzNC4zOWMuOCAxLjcxIDIuNzggNS4wOSAyLjc4IDUuMDlMNDAuOTUgMS42NGwtMjIuMzQgMTUuNmE5Ljc1IDkuNzUgMCAwIDAtMy4xOCAzLjUgMTYuMTkgMTYuMTkgMCAwIDAtLjE1IDEzLjY1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYgLTEuNjQpIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik02LjIxIDQ2Ljg1YTI1LjQ3IDI1LjQ3IDAgMCAwIDEwIDE4LjUxbDI0LjcxIDE3LjIzcy0xNS40Ni0yMi4yOC0yOC41LTQ0LjQ1YTIyLjM5IDIyLjM5IDAgMCAxLTIuNjItNy41NiAxMi4xIDEyLjEgMCAwIDEgMC0zLjYzYy0uMzQuNjMtMSAxLjkyLTEgMS45MmEyOS4zNSAyOS4zNSAwIDAgMC0yLjY3IDguNTUgNTIuMjggNTIuMjggMCAwIDAgLjA4IDkuNDN6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNiAtMS42NCkiLz48cGF0aCBkPSJNNjkuMjUgNDkuODRjLS44LTEuNzEtMi43OC01LjA5LTIuNzgtNS4wOUw0My41OCA4Mi41OSA2NS45MiA2N2E5Ljc1IDkuNzUgMCAwIDAgMy4xOC0zLjUgMTYuMTkgMTYuMTkgMCAwIDAgLjE1LTEzLjY2eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYgLTEuNjQpIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC0yKSIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTc4LjMyIDM3LjM4YTI1LjQ3IDI1LjQ3IDAgMCAwLTEwLTE4LjUxTDQzLjYxIDEuNjRzMTUuNDUgMjIuMjggMjguNSA0NC40NWEyMi4zOSAyMi4zOSAwIDAgMSAyLjYxIDcuNTYgMTIuMSAxMi4xIDAgMCAxIDAgMy42M2MuMzQtLjYzIDEtMS45MiAxLTEuOTJhMjkuMzUgMjkuMzUgMCAwIDAgMi42Ny04LjU1IDUyLjI4IDUyLjI4IDAgMCAwLS4wNy05LjQzeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYgLTEuNjQpIi8+PHBhdGggZD0iTTE1LjQzIDIwLjc0YTkuNzUgOS43NSAwIDAgMSAzLjE4LTMuNWwyMi4zNC0xNS42LTIyLjg5IDM3Ljg1cy0yLTMuMzgtMi43OC01LjA5YTE2LjE5IDE2LjE5IDAgMCAxIC4xNS0xMy42NnpNNi4yMSA0Ni44NWEyNS40NyAyNS40NyAwIDAgMCAxMCAxOC41MWwyNC43MSAxNy4yM3MtMTUuNDYtMjIuMjgtMjguNS00NC40NWEyMi4zOSAyMi4zOSAwIDAgMS0yLjYyLTcuNTYgMTIuMSAxMi4xIDAgMCAxIDAtMy42M2MtLjM0LjYzLTEgMS45Mi0xIDEuOTJhMjkuMzUgMjkuMzUgMCAwIDAtMi42NyA4LjU1IDUyLjI4IDUyLjI4IDAgMCAwIC4wOCA5LjQzem02MyAzYy0uOC0xLjcxLTIuNzgtNS4wOS0yLjc4LTUuMDlMNDMuNTggODIuNTkgNjUuOTIgNjdhOS43NSA5Ljc1IDAgMCAwIDMuMTgtMy41IDE2LjE5IDE2LjE5IDAgMCAwIC4xNS0xMy42NnptOS4wNy0xMi40NmEyNS40NyAyNS40NyAwIDAgMC0xMC0xOC41MUw0My42MSAxLjY0czE1LjQ1IDIyLjI4IDI4LjUgNDQuNDVhMjIuMzkgMjIuMzkgMCAwIDEgMi42MSA3LjU2IDEyLjEgMTIuMSAwIDAgMSAwIDMuNjNjLjM0LS42MyAxLTEuOTIgMS0xLjkyYTI5LjM1IDI5LjM1IDAgMCAwIDIuNjctOC41NSA1Mi4yOCA1Mi4yOCAwIDAgMC0uMDctOS40M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02IC0xLjY0KSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOmNvbG9yIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC0zKSIvPjwvZz48L2c+PC9zdmc+" alt="ENS Logo" className="ens-logo" />
        <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTMuNjIgNDMuNyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmZmZmZ9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNLjIzIDU5LjA4VjE3LjJhLjIyLjIyIDAgMCAxIC4yMS0uMmgyNi42MWEuMjIuMjIgMCAwIDEgLjIyLjIydjUuMzNhLjIyLjIyIDAgMCAxLS4yMi4yMkg2LjY1djEyLjM0SDI0YS4yMi4yMiAwIDAgMSAuMjIuMjJ2NS4yN2EuMjIuMjIgMCAwIDEtLjIyLjIySDYuNjV2MTIuNzFoMjAuNGEuMjIuMjIgMCAwIDEgLjIyLjIydjUuMzNhLjIyLjIyIDAgMCAxLS4yMi4yMkguNDRhLjIyLjIyIDAgMCAxLS4yMS0uMjJ6TTY2LjQgNTkuMTlMNDYuOTMgMjkuNTR2MjkuNTNhLjIyLjIyIDAgMCAxLS4yMi4yMmgtNmEuMjIuMjIgMCAwIDEtLjIyLS4yMlYxNy4yM2EuMjIuMjIgMCAwIDEgLjIyLS4yMmg1LjU1YS4yMi4yMiAwIDAgMSAuMTguMUw2NS45MyA0Ni43VjE3LjIzYS4yMi4yMiAwIDAgMSAuMjItLjIyaDZhLjIyLjIyIDAgMCAxIC4yMi4yMnY0MS44NGEuMjIuMjIgMCAwIDEtLjIyLjIyaC01LjU3YS4yMi4yMiAwIDAgMS0uMTgtLjF6TTkyIDUxLjE3djJhNDAuNzkgNDAuNzkgMCAwIDAgNy44Mi45MiA0MC4yNyA0MC4yNyAwIDAgMCA3LjczLS45MVY0My43bC0yMS43OC03LjYxYS4yMi4yMiAwIDAgMS0uMTQtLjJWMTguNDhhLjE5LjE5IDAgMCAxIC4xNC0uMiA1NC4zNCA1NC4zNCAwIDAgMSAxMy45NC0yIDU1LjA3IDU1LjA3IDAgMCAxIDE0IDIgLjE5LjE5IDAgMCAxIC4xNC4ydjYuNTdhLjIyLjIyIDAgMCAxLS4yMi4yMmgtNS44OWEuMjIuMjIgMCAwIDEtLjIyLS4yMnYtMmE0MC44NSA0MC44NSAwIDAgMC03LjgyLS45MSA0MC41IDQwLjUgMCAwIDAtNy43My45TDkyIDMybDIxLjcgNy42YS4yMi4yMiAwIDAgMSAuMTQuMnYxNy45NWEuMTkuMTkgMCAwIDEtLjE0LjIgNTQuMzYgNTQuMzYgMCAwIDEtMTMuOTQgMiA1NS4xMSA1NS4xMSAwIDAgMS0xNC0yIC4xOS4xOSAwIDAgMS0uMTQtLjJ2LTYuNThhLjIyLjIyIDAgMCAxIC4yMi0uMjJoNS44OGEuMjIuMjIgMCAwIDEgLjI4LjIyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLS4yMyAtMTYuMjcpIi8+PC9zdmc+" alt="ENS Logo text" className="ens-logo-text"/>
      </div>
      <div className={styles.profileCard}>
        <img src={user.avatar} width="400" />
        <div className={styles.profileCardInfo}>
          <h1 className={styles.name}>{user.name}</h1>
          <div>{user.description}</div>
          <br/>
          <div><a href={`https://twitter.com/${user.twitter}`}>{user.twitter && "@" + user.twitter}</a></div>
          <div><a href={`mailto:${user.email}`}>{user.email}</a></div>
        </div>
      </div>
    </Fragment>
  );
}
