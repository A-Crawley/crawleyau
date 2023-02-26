
<script lang="ts">
    import Modal, {getModal} from './Modal.svelte';
    import Airtable from 'airtable';
	import { env } from '$env/dynamic/public';

    let message :string | null = null;
    let email :string | null = null;
    let count :number = 0;

    const messageChanged = () => {
        count = message?.length ?? 0;
    }

    const send = () => {

        if (email === null || message === null) return;

        var base = new Airtable({apiKey: env.PUBLIC_AIRTABLE}).base(env.PUBLIC_BASE_ID);
        base('Table 1').create([
                {
                    "fields": {
                    "Email": email,
                    "Body": message
                    }
                }
            ], function(err, records) {
                if (err || records === undefined) {
                    //console.error(err);
                    return;
                }
                records.forEach(function (record) {
                    //console.log(record.getId());
                });
            });

        getModal("form").close();
        getModal("response").open();
    }

</script>

<div id="name">
    <span>Andrew</span>
    <div id="line"></div>
    <span>Crawley</span>
</div>
<div style="display:flex;flex-direction:column;justify-content:center;height:100vh;">
    <div id="center">
        <div id="image">
            <div class="box box-small"></div>
            <div class="box box-tiny"></div>
            <div class="box box-large"></div>
        </div>
        <div id="blurb">
            <div>
                <p>From Websites to Software</p>
                <p>&</p>
                <p>Everything In-Between</p>
            </div>
            <div id="enquire">
                <button on:click={() => getModal("form").open()}>ENQUIRE</button>
            </div>   
        </div> 
    </div>
</div>


<Modal id="form">
    <div style="min-width: 300px; width: 100%">
        <h1>Enquire</h1>

        <div style="width:100%">
            <h3 style="margin-bottom:10px">Email</h3>
            <input bind:value={email} id="email" class="inp" type="email" />
        </div>
        <div>
            <h3 style="margin-bottom:10px">Body</h3>
            <textarea bind:value={message} on:input={messageChanged} id="body" class="inp" style="resize:none; height:200px" maxlength="255"/>
            <caption style="display:block;text-align:end;">{count}/255</caption>
        </div>
        <div id="send" style="margin-bottom:10px;">
            <button on:click={send}>SEND</button>
        </div>
    </div>
</Modal>

<Modal id="response">

    <p>Thank you for your enquiry</p>
    <p>I will be in touch!</p>

</Modal>


<style>
    #name{
        position: absolute;
        top: 40px;
        left: 40px;
        font-size: 45px;
        max-width: 204px;
        text-align: center;
    }

    #line{
        border-bottom: 5px solid var(--red);
    }

    #center{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    #image{
        position: relative;
        height: calc(340px + (170px / 2));
        width: calc(340px + (170px / 2));;
    }

    #blurb{
        text-align: center;
        font-size: 45px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    #blurb > div > p{
        margin-top:10px;
        margin-bottom:10px;
    }

    #enquire > button {
        border: 1px solid var(--black);
        background-color: #D9D9D990;
        height: 57px;
        width: 194px;
        border-radius: 34px;
        font-family: inherit;
        font-size: 28px;
        box-shadow: 1px 1px var(--black);
    }

    #enquire > button:hover{
        cursor: pointer;
        background-color: #D9D9D9EE;
    }

    #enquire > button:active{
        cursor: pointer;
        box-shadow: none;
    }

    #send > button {
        border: 1px solid var(--black);
        background-color: #D9D9D990;
        height: 25px;
        width: 100px;
        border-radius: 15px;
        font-family: inherit;
        font-size: 14px;
        box-shadow: 1px 1px var(--black);
    }

    #send > button:hover{
        cursor: pointer;
        background-color: #D9D9D9EE;
    }

    #send > button:active{
        cursor: pointer;
        box-shadow: none;
    }

    .box{
        border: 5px solid var(--black);
        position: absolute;
    }

    .box-tiny{
        top: 85px;
        right: 85px;
        height: 75px;
        width: 75px;
        background-color: var(--red);
    }

    .box-small{
        top: 0;
        right: 0;
        height: 160px;
        width: 160px;
    }

    .box-large{
        bottom: 0;
        height: 330px;
        width: 330px;
    }

    .inp{
        height:24px;
        width: -webkit-fill-available;
    }



    @media only screen and (max-width: 600px){
        #image{
            display: none;
        }

        #blurb{
            height: 60vh;
        }
    }
</style>
