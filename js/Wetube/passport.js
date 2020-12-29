import passport from "passport";
import User from "./models/User";
import GithubStrategy from "passport-github";
import KakaoStrategy from "passport-kakao";
import { githubLoginCallback, kakaoLoginCallback } from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy()); //LocalStrategy의 지름길이라고 생각하면 됨.
// strategy: 로그인 방식을 의미함. (local: (email, password)를 이용, (facebook,github): sns를 이용한 로그인)

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

passport.use(
  new KakaoStrategy(
    {
      clientID: process.env.KAKAO_ID,
      callbackURL: `http://localhost:4000${routes.kakaoCallback}`,
    },
    kakaoLoginCallback
  )
);

passport.serializeUser(User.serializeUser()); // 저장할 cookies 를 지정해줌.
passport.deserializeUser(User.deserializeUser()); // 저장한 cookies 를 불러와서 사용함.
