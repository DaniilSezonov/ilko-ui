import styles from './page.module.scss';
import '@ilko/scss-theme/dist/output.css';
import { TestCard } from '@ilko/ui-kit';
import Test from './components/test';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  // console.log(DefaultLayout({}));
  return (
    <div className={styles.page}>
      {/* <DefaultLayout> */}
        <div className="float-right to-blue-200 test">
          <TestCard />
          <Test />
          hello world
        </div>
      {/* </DefaultLayout> */}
    </div>
  );
}
