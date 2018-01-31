import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';

export default class BodyWrapper extends Component {
  render() {
    return (
      <header className="main-header">
        <a href="index2.html" className="logo">
          <span className="logo-mini"><b>A</b>LT</span>
          <span className="logo-lg"><b>Admin</b>LTE</span>
        </a>

        <Nav className="navbar navbar-static-top" role="navigation">
          <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown messages-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-envelope-o"></i>
                  <span className="label label-warning">12</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">12 новых сообщений</li>
                  <li>
                    <ul className="menu">
                      <li>
                        <a href="#">
                          <div className="pull-left">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle"
                                 alt="User Image"/>
                          </div>
                          <h4>
                            Служба поддержки
                            <small><i className="fa fa-clock-o"></i> 5 мин</small>
                          </h4>
                          <p>Решение проблемы по вашей заявке</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer"><a href="#">Просмотреть все сообщения</a></li>
                </ul>
              </li>
              <li className="dropdown notifications-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-bell-o"></i>
                  <span className="label label-warning">10</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">10 новых уведомлений</li>
                  <li>
                    <ul className="menu">
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-aqua"></i> 5 новых карт сегодня
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart text-green"></i> 25 операций сегодня
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer"><a href="#">Просмотреть все</a></li>
                </ul>
              </li>
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image"/>
                  <span className="hidden-xs">Иванов Иван</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>

                    <p>
                      Иванов Иван - Менеджер
                      <small>Табельный №: 9500564</small>
                      <small>Руководитель: Петров Петр</small>
                    </p>
                  </li>
                  <li className="user-footer">
                    <div className="pull-left">
                      <a href="#" className="btn btn-default btn-flat">Профиль</a>
                    </div>
                    <div className="pull-right">
                      <a href="#" className="btn btn-default btn-flat">Выйти</a>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" data-toggle="control-sidebar" data-target="#options"><i className="fa fa-gears"></i></a>
              </li>
            </ul>
          </div>
        </Nav>
      </header>
    )
  }
}