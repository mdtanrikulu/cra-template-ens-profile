import React, { Fragment, useEffect, useState } from 'react';
import { AvatarResolver, utils as avtUtils } from '@ensdomains/ens-avatar';
import { ethers } from 'ethers';
import { useMetamask } from 'use-metamask';
import styles from './app.module.css';

export default function App() {
  const { connect, metaState } = useMetamask(ethers);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    avatar: '',
    email: '',
    twitter: '',
    name: '',
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
      if (metaState.web3 && metaState.isConnected && !user.avatar) {
        setLoading(true);
        const provider = metaState.web3;
        // welcome friENS :) we code it here
        setUser({ ...user });
        setLoading(false);
      }
    })();
  }, [metaState.account?.[0], metaState.chain]);

  return (
    <Fragment>
      {loading ? (
        <span>Loading profile...</span>
      ) : (
        <div className={styles.profileCard}>
          <img src={user.avatar} height="150" />
          <div className={styles.profileCardInfo}>
            <h2>{user.name}</h2>
            {user.twitter && (
              <div>
                <a href={`https://twitter.com/${user.twitter}`}>
                  {'@' + user.twitter}
                </a>
              </div>
            )}
            <div>
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
