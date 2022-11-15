<template>
    <div id="contact" class="img-contact">
        <img src="./image/dimitar-belchev-fRBpWLAcWIY-unsplash.jpg" class="contact-img"  alt="">
        <div class="content-section container max-width mt-5">
        <div class="row contact-content">
            <div style="font-weight: 200;" class="col col-haft contact-infor">
                <h1 style="font-weight: 200;" class="text-white">Contact with us:</h1>
                <p><i class="fas fa-map-marker-alt"></i>Ninh Kiều, Cần thơ</p>
                <p><i class="fas fa-phone-alt"></i>Phone: +00 151515</p>
                <p><i class="fas fa-envelope"></i>Email: datb2012076@gmail.ctu.edu.vn</p>
            </div>
            <div class="col col-haft contact-form">
                <form action="">
                    <div class="row">
                        <div class="col col-haft">
                            <input type="text" name="" placeholder="Name" required id="" class="form-control">
                        </div>
                        <div class="col col-haft">
                            <input type="email" name="" placeholder="Email" required id="" class="form-control">
                        </div>
                    </div>
                    <div class="row mt-8">
                        <div class="col col-full">
                            <input type="text" name="" placeholder="Message" required id="" class="form-control">
                        </div>
                    </div>
                    <input class="pull-right mt-3" style="background: transparent; color: white; border:none; margin-right: 6px; font-weight: 200;" type="submit" value="SEND">
                </form>
            </div>
        </div>
    </div>
    </div>
    
</template>

<style scoped>
    .text-center{
    text-align: center !important;
}

.col{
    float: left;
    padding-left: 8px !important;
    padding-right: 8px !important;
}
.max-width {
    max-width:680px;
}
.pull-right{
    float: right !important;
}

.col-third{
    width: 33.33333%;
}

.col-haft{
    width: 50%;
}

.col-full{
    width: 100%;
}

.row::after{
    content: "";
    display: block;
    clear: both;
}
.mt-8{
    margin-top: 8px !important;
}

.mt-16{
    margin-top: 16px !important;
}

.content-section {
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}


.contact-content{
    padding:20px;
    background: rgba(0,0,0,0.8);
    color: #fff;
    border-radius: 5px;
}

.contact-infor{
    font-size: 18px;
    line-height: 1.5;
}

.contact-infor i[class*="fas "]{
    width: 30px;
    display: inline-block;
    
}

.contact-form{
    font-size: 15px;
    
}

.contact-form .form-control{
    padding: 11px;
    border: none;
    border: 1px solid #ccc;
    width: 100%;
}

.img-contact {
    position: relative;
}


.img-contact .contact-img {
    position: relative;
}

.font-weight {
    font-weight: 200;
}

.contact-img {
    width: 100%;
}

@media (max-width: 739px) {
    .content-section {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }
    .contact-content {
        max-width:500px;
    }
}

@media (min-width: 740px) and (max-width: 1023px) { 
    .content-section {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
        z-index: 1;
    }

}

@media (min-width: 1024px) {
    .content-section {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
        z-index: 1;
    }
}
</style>