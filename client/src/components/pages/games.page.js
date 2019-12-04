import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGames } from '../../global/actions/game.actions';
import AddGames from '../layout/AddGamesDialog';
import GamesTable from '../layout/DataTable';

const GamesPage = ({ getGames, games }) => {
  useEffect(() => {
    getGames();
  }, []);
  return (
    <Fragment>
      <AddGames />
      <GamesTable games={games} />
    </Fragment>
  );
};

GamesPage.propTypes = {
  games: PropTypes.array.isRequired,
  getGames: PropTypes.func.isRequired
};

export default connect(state => ({ games: state.games }), { getGames })(
  GamesPage
);
