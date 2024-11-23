import React from 'react'
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

const Footer = () => {

    const [data, setData] = React.useState({
        email: '',
        status: 'initial',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setData((current) => ({ ...current, status: 'loading' }));
        try {
            // Replace timeout with real backend operation
            setTimeout(() => {
                setData({ email: '', status: 'sent' });
            }, 1500);
        } catch (error) {
            setData((current) => ({ ...current, status: 'failure' }));
        }
    };


    return (
        <footer className='mt-5'>
            <div className="footer-main d-flex justify-content-center p-5 main-widt">
                <div className="footer-signup px-5">
                    <h5>Hekto</h5>
                    <form onSubmit={handleSubmit} id="demo">
                        <FormControl>
                            <Input
                                sx={{ '--Input-decoratorChildHeight': '45px' }}
                                placeholder="Enter Email Address"
                                type="email"
                                required
                                value={data.email}
                                onChange={(event) =>
                                    setData({ email: event.target.value, status: 'initial' })
                                }
                                error={data.status === 'failure'}
                                endDecorator={
                                    <Button
                                        variant="solid"
                                        color="theme.vars.palette.danger[400]"
                                        loading={data.status === 'loading'}
                                        type="submit"
                                        sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                                    >
                                        Sign up
                                    </Button>
                                }
                            />
                            {data.status === 'failure' && (
                                <FormHelperText
                                    sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
                                >
                                    Oops! something went wrong, please try again later.
                                </FormHelperText>
                            )}
                            {data.status === 'sent' && (
                                <FormHelperText
                                    sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
                                >
                                    You are all set!
                                </FormHelperText>
                            )}
                        </FormControl>
                    </form>

                    <p>Contact info</p>
                    <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                </div>
                <div className="footer-container d-flex">
                    <div className="footer-links">
                        <h5>Categories</h5>
                        <ul>
                            <li>Laptops & Computers</li>
                            <li>Cameras & Photography</li>
                            <li>Smart Phones & Tablets</li>
                            <li>Video Games & Consoles </li>
                            <li>Waterproof Headphones </li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h5>Customer Care</h5>
                        <ul>
                            <li>My Account</li>
                            <li>Discount</li>
                            <li>Returns</li>
                            <li>Orders History</li>
                            <li>Order Tracking</li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h5>Pages</h5>
                        <ul>
                            <li>Blog</li>
                            <li>Browse the Shop</li>
                            <li>Category</li>
                            <li>Pre-Built Pages</li>
                            <li>Visual Composer Elements</li>
                            <li>WooCommerce Pages</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-ftr">

                </div>
            </div>
        </footer>
    )
}

export default Footer