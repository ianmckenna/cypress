import LogInPage from '../LogInPage';
import PurchaseFlow from '../PurchaseFlow';

describe('Buy 5 tests!', () => {
    it('Should buy 5 tests', () => {

        const login = new LogInPage;
        const buy = new PurchaseFlow;

        login.visitLogin();
        login.putCredentials();
        buy.getFoodSens();


    })
})