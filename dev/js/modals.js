'use strict';

const ModalType = {
    AirportManagementSystem:
    '                    <div class="row">' +
    '                        <div class="col-lg-6 col-md-12 col-sm-12">' +
    '                            <img class="img-fluid mx-auto" src="img/modal/airport1.jpg" alt="airport1">' +
    '                            <img class="img-fluid mx-auto" src="img/modal/airport2.jpg" alt="airport2">' +
    '                        </div>' +
    '                        <div class="col-md-6 col-sm-12 modal-text">' +
    '                            <div class="intro-modal">' +
    '                                <p>Airport management system</p>' +
    '                            </div>' +
    '                            <div class="lead">' +
    '                                <p>Aviation industry has shown a strong preference for out-of-box solutions equiped with' +
    '                                    domain business logic, quality management tools and business intelligence' +
    '                                    dashboards. Airport flight tracking, flight management system or other modular,' +
    '                                    business-process oriented product with a minimum effort maintenance.</p>' +
    '                            </div>' +
    '                        </div>' +
    '                    </div>',

    RestaurantReviewSystem: '              <div class="row">\n' +
    '                        <div class="col-md-12 text-center">\n' +
    '                            <p class="intro-modal">Restaurant Review System</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="row">\n' +
    '                        <div class="col-md-12 text-center">\n' +
    '                            <p class="lead">We help invidual resaurants and restaurant networks create discount systems,\n' +
    '                                review and feedback systems. This is an universal solution for food market players to\n' +
    '                                gain presence on mobile and web.</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="row centered">\n' +
    '                        <div class="col-md-12">\n' +
    '                            <img class="img-fluid" src="img/modal/restaurant.jpg" alt="restaurant">\n' +
    '                        </div>\n' +
    '                    </div>',

    WordpressUniversalBuilder: '<div class="row">\n' +
    '                        <div class="col-md-12 text-center">\n' +
    '                            <p class="intro-modal">Wordpress Universal Builder</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="row">\n' +
    '                        <div class="col-md-12 text-center">\n' +
    '                            <p class="lead">For the needs of e-commerce, we created a universal Wordpress builder to\n' +
    '                                facilitate the process of building e-stores out of box. Due to its flexibility, builder\n' +
    '                                will help you not only create custom elements, but also manage content efficiently. As\n' +
    '                                part of the deliviry, we do the setup and deployment to production.</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="row centered">\n' +
    '                        <div class="col-md-12">\n' +
    '                            <div class="embed-responsive embed-responsive-1by1">\n' +
    '                                <iframe class="embed-responsive-item" src="" allowfullscreen>\n' +
    '                                </iframe>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>',

    CWIntelligentDBtoolkit: '<div class="row">\n' +
    '                        <div class="col-md-12 text-center">\n' +
    '                            <p class="intro-modal">CW Intelligent DB toolkit</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="row">\n' +
    '                        <div class="col-md-12 text-center">\n' +
    '                            <p class="lead">Business Intelligence reporting is crucial for all levels of an organization\n' +
    '                                and considering this, we create a DB management tools to fetch and visualize data in an\n' +
    '                                elegant way. This is a solution to gain insights from data, by creating and exporting\n' +
    '                                dashboards.</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="row centered">\n' +
    '                        <div class="col-sm">\n' +
    '                            <img class="img-fluid" src="img/modal/db-1.jpg" alt="database">\n' +
    '                        </div>\n' +
    '                        <div class="col-sm">\n' +
    '                            <img class="img-fluid" src="img/modal/db-2.jpg" alt="database">\n' +
    '                        </div>\n' +
    '                    </div>',

};

const ModalElement = new function () {
    const modalElement = $('#cw-modal-element');
    const modalData = modalElement.find('#cw-modal-data');

    modalElement.find('#cw-ask-price-button').on('click', function (e) {
        modalElement.modal('hide');
    });

    this.presentFor = function (type) {
        modalData.html(type);
        modalElement.modal('show');
    };
};
