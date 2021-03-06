import { combineReducers, createStore, applyMiddleware } from "redux";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";
import { FeedBacks } from "./feedback";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from "react-redux-form";
import { InitialFeedback } from "./form";
import { compose } from "redux";
export const ConfigureStore = () => {
  return createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      FeedBacks: FeedBacks,
      ...createForms({
        temporaryFeedback: InitialFeedback
      })
    }), // reducer
    compose(
      applyMiddleware(thunk, logger), // thunk help handle Curry function with dispatch params
      // for sake of using thunk, -> disable extension for redux
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
};
